import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from '../../Models/IAdmin';
import { AdminloginService } from '../../Services/Admin/adminlogin.service';

@Component({
  selector: 'app-admin-profile-child',
  templateUrl: './admin-profile-child.component.html',
  styleUrl: './admin-profile-child.component.css'
})
export class AdminProfileChildComponent implements OnInit {
  logedadmin:IAdmin;
  httpResponse?:string;
  constructor(private adminloginservice: AdminloginService,private router:Router){
    this.logedadmin={adminID:0,adminName:"",email:"",password:"",phone:"",gender:"",salary:0,address:"",deptNo:0};
  }
  ngOnInit(): void {
    debugger;
    if(window.sessionStorage.getItem("AdminData")==null)
      {
        this.router.navigate(["adminlogin"]);
      }
    this.adminloginservice.GetAdminById(parseInt(window.sessionStorage.getItem("AdminIdData")?.toString()!))
    .subscribe(data=>this.logedadmin=data);
  }

}
