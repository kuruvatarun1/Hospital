import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../../../../Models/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class ManagdocService {
  _url : string = "http://localhost:15572/api/DoctorsWebAPI/";

  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  AllDoctors():Observable<IDoctor[]>{
    debugger;
    return this.http.get<IDoctor[]>(this._url+"AllDoctors");
  }
  GetDoctorByID(DocEmpId:number):Observable<IDoctor>{
    return this.http.get<IDoctor>(this._url+"GetDoctorByID?DocEmpId="+DocEmpId);
  }
  EmployeeCheckByEmailAndPasswordAndDeptNo(Email:string,Password:string,DeptsNo:number):Observable<IDoctor>{
   return this.http.get<IDoctor>(this._url+"EmployeeCheckByEmailAndPasswordAndDeptNo?Email="+Email+
   "&Password="+Password+"&DeptsNo="+DeptsNo); 
  }
  InsertDoctor(doc:IDoctor):Observable<string>{
    debugger;
   return this.http.post<string>(this._url+"InsertDoctor",doc,this.httpOptions);
  }
  UpdateDoctor(doct:IDoctor):Observable<string>{
    debugger;
    return this.http.put<string>(this._url+"UpdateDoctor",doct,this.httpOptions);
  }
  DeleteDoctor(DocEmpId:number):Observable<string>{
    debugger;
    return this.http.delete<string>(this._url+"DeleteDoctor?DocEmpId="+DocEmpId,this.httpOptions);
  }

}