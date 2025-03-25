import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILabAss } from '../../../../Models/ILabAssistant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManaglabassService {

  _url : string = "http://localhost:15572/api/LabEmpWebAPI/";

  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http:HttpClient){}

  AllLabEmployees():Observable<ILabAss[]>{
    debugger;
    return this.http.get<ILabAss[]>(this._url+"AllLabEmployees");
  }
  GetLabEmployeeByEmpID(LabEmpId:number):Observable<ILabAss>{
    return this.http.get<ILabAss>(this._url+"GetLabEmployeeByEmpID?LEmpId="+LabEmpId);
  }
  EmployeeCheckByEmailAndPasswordAndDeptNo(Email:string,Password:string,DeptsNo:number):Observable<ILabAss>{
   return this.http.get<ILabAss>(this._url+"EmployeeCheckByEmailAndPasswordAndDeptNo?Email="+Email+
   "&Password="+Password+"&DeptsNo="+DeptsNo); 
  }
  InsertLabEmployee(labemp:ILabAss):Observable<string>{
    debugger;
   return this.http.post<string>(this._url+"InsertLabEmployee",labemp,this.httpOptions)
  }
  UpdateLabEmployee(labemp:ILabAss):Observable<string>{
    debugger;
    return this.http.put<string>(this._url+"UpdateLabEmployee",labemp,this.httpOptions)
  }
  DeleteLabEmployee(LabEmpId:number):Observable<string>{
    debugger;
    return this.http.delete<string>(this._url+"DeleteLabEmployee?LEmpId="+LabEmpId,this.httpOptions);
  }

}
