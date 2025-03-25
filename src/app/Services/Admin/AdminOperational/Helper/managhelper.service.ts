import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHelper } from '../../../../Models/IHelper';

@Injectable({
  providedIn: 'root'
})
export class ManaghelperService {

  _url : string ="http://localhost:15572/api/HelpersWebAPI/";
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  AllHelpers():Observable<IHelper[]>{
    debugger;
    return this.http.get<IHelper[]>(this._url+"AllHelpers");
  }
  GetHelperByID(HelprEmpId:number):Observable<IHelper>{
    debugger;
    return this.http.get<IHelper>(this._url+"GetHelperByID?HEmpId="+HelprEmpId);
  }
  EmployeeCheckByEmailAndPasswordAndDeptNo(Email:string,Password:string,DeptsNo:number):Observable<IHelper>{
    debugger;
    return this.http.get<IHelper>(this._url+"EmployeeCheckByEmailAndPasswordAndDeptNo?Email="+Email+
    "&Password="+Password+"&DeptsNo="+DeptsNo);
  }
  InsertHelper(helper:IHelper):Observable<string>{
    debugger;
    return this.http.post<string>(this._url+"InsertHelper",helper,this.httpOptions);
  }
  UpdateHelper(helper:IHelper):Observable<string>{
    debugger;
    return this.http.put<string>(this._url+"UpdateHelper",helper,this.httpOptions);
  }
  DeleteHelper(HelprEmpId:number):Observable<string>{
    debugger;
    return this.http.delete<string>(this._url+"DeleteHelper?HEmpId="+HelprEmpId,this.httpOptions);
  }
}
