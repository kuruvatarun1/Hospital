import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { IAdmin } from '../../Models/IAdmin';
import { AdminProfileMainComponent } from '../admin-profile-main/admin-profile-main.component';
import { AdminloginService } from '../../Services/Admin/adminlogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {
  logedadmin?:IAdmin;
  email?:string;
  password?:string;
  httpResponse?:string;

  constructor(private adminloginservice:AdminloginService,private router:Router){
   //this.adminlog={adminID:0,adminName:"",email:"",password:"",phone:"",gender:"",salary:0,address:"",deptNo:0}
  }
  
  ngOnInit(): void {
     if(window.sessionStorage.getItem("AdminData")!=null){
      this.router.navigate(["adminprofilemain"]);
     }
  }

  validation():boolean{
    if(this.email==""){
      alert("Please Enter Name");
      return false;
    }
    if(this.password==""){
      alert("please enter password");
    }
    return true;
  }

    btn_LoginClick():void{
      debugger;
      this.adminloginservice.AdminLoginChek1(this.email!, this.password!)
      .subscribe(data=>{
        //console.log(data);
        window.sessionStorage.setItem("AdminData",data.toString());
        window.sessionStorage.setItem("AdminIdData",data.adminID.toString());
        this.router.navigate(["adminprofilemain/adminprofilechild"]).
        then(()=>{
              window.location.reload();
        });
      }, error=>{
        alert("Invalid Username or Password.\nIf you are not registered then please register");
        this.router.navigate(["register"]).then(()=>{
          window.location.reload();
        });
      });

    }

  btnCancel_Click():void{
    this.router.navigate(["home"]);
  }

}