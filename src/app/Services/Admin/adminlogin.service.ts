import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAdmin } from '../../Models/IAdmin';
import { Observable } from 'rxjs';
import { IADept } from '../../Models/IAdminDepts';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  _url: string ="http://localhost:15572/api/AdminLoginWebAPI/";
  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


  GetAdminById(AdminId:number) : Observable<IAdmin>{
    return this.http.get<IAdmin>(this._url+"GetAdminById?AdminId="+AdminId);
  }

  AdminLoginChek1(Email:string, Password:string):Observable<IAdmin>{
     return this.http.get<IAdmin>(this._url+"AdminLoginChek1?Email="+Email+"&Password="+Password);
  }

  GetAlldepartments():Observable<IADept[]>{
    return this.http.get<IADept[]>("http://localhost:15572/api/AdminDepartmentWebAPI/AllDepartments"); 
   }

   InsertAdmin(Ad:IAdmin):Observable<string>{
    return this.http.post<string>("http://localhost:15572/api/AdminDepartmentWebAPI/AllDepartments" ,Ad ); 
   }
 
   constructor(private http:HttpClient) { }  
}
