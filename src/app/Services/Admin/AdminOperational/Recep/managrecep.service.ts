import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecep } from '../../../../Models/IReceptionist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagrecepService {

  _url : string = "http://localhost:15572/api/ReceptionistWebAPI/";

  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  AllReceptionists():Observable<IRecep[]>{
    debugger;
    return this.http.get<IRecep[]>(this._url+"AllReceptionists");
  }
  GetReceptionistByID(REmpId:number):Observable<IRecep>{
    return this.http.get<IRecep>(this._url+"GetReceptionistByID?REmpId="+REmpId);
  }
  EmployeeCheckByEmailAndPasswordAndDeptNo(Email:string,Password:string,DeptsNo:number):Observable<IRecep>{
   return this.http.get<IRecep>(this._url+"EmployeeCheckByEmailAndPasswordAndDeptNo?Email="+Email+
   "&Password="+Password+"&DeptsNo="+DeptsNo); 
  }
  InsertReceptionist(emp:IRecep):Observable<string>{
    debugger;
   return this.http.post<string>(this._url+"InsertReceptionist",emp,this.httpOptions)
  }
  UpdateReceptionist(emp:IRecep):Observable<string>{
    debugger;
    return this.http.put<string>(this._url+"UpdateReceptionist",emp,this.httpOptions)
  }
  DeleteReceptionist(REmpId:number):Observable<string>{
    debugger;
    return this.http.delete<string>(this._url+"DeleteReceptionist?REmpId="+REmpId,this.httpOptions);
  }

}
