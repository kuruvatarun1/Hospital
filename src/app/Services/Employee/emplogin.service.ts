import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../../Models/IDoctor';
import { IHelper } from '../../Models/IHelper';
import { ILabAss } from '../../Models/ILabAssistant';
import { IRecep } from '../../Models/IReceptionist';

@Injectable({
  providedIn: 'root'
})
export class EmploginService {
  _docUrl?:string = "http://localhost:15572/api/DoctorsWebAPI/";
  _labUrl?:string = "http://localhost:15572/api/LabEmpWebAPI/";
  _recpUrl?:string = "http://localhost:15572/api/ReceptionistWebAPI/";
  _hlpUrl?:string = "http://localhost:15572/api/HelpersWebAPI/";

  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  DoctorByEmailAndPasswordAndDeptNo(DeptsNo:number,Email:string, Password:string):Observable<IDoctor>{
    return this.http.get<IDoctor>(this._docUrl+"DoctorByEmailAndPasswordAndDeptNo?DeptsNo="+DeptsNo+"&Email="+Email+"&Password="+Password);
  }

  HelperByEmailAndPasswordAndDeptNo(DeptsNo:number,Email:string, Password:string):Observable<IHelper>{
    return this.http.get<IHelper>(this._hlpUrl+"HelperByEmailAndPasswordAndDeptNo?DeptsNo="+DeptsNo+"&Email="+Email+"&Password="+Password);
  }

  LabEmpByEmailAndPasswordAndDeptNo(DeptsNo:number,Email:string, Password:string):Observable<ILabAss>{
    return this.http.get<ILabAss>(this._labUrl+"LabEmpByEmailAndPasswordAndDeptNo?DeptsNo="+DeptsNo+"&Email="+Email+"&Password="+Password);
  }

  ReceptionistByEmailAndPasswordAndDeptNo(DeptsNo:number,Email:string, Password:string):Observable<IRecep>{
    return this.http.get<IRecep>(this._recpUrl+"ReceptionistByEmailAndPasswordAndDeptNo?DeptsNo="+DeptsNo+"&Email="+Email+"&Password="+Password);
  }

}
