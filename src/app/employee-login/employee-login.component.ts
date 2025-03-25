import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../Services/Employee/emplogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})  
export class EmployeeLoginComponent implements OnInit {

  departmentNo?:number;
  email?:string;
  password?:string;
  constructor(private emploginservice:EmploginService, private router:Router){

  }

  ngOnInit(): void {
    // if(window.sessionStorage.getItem("EmpData")!=null){
    //   this.router.navigate(["employeeprofile"]);
    //  }
  }
  btn_EmpLogin():void{
    debugger;
    if(this.departmentNo==11){ //Doctors
      this.emploginservice.DoctorByEmailAndPasswordAndDeptNo(this.departmentNo!,this.email!, this.password!)
      .subscribe(data=>{
        window.sessionStorage.setItem("DocEmpData",data.toString());
        window.sessionStorage.setItem("DocEmpIdData",data.docEmpId.toString());
        // window.sessionStorage.setItem("ActiveData",data.active.toString());
        // if(window.sessionStorage.getItem("ActiveData")=="true"){
          this.router.navigate(["docprofile"]);
        // }else{
        //   this.router.navigate(["activemaker"]);
        // }
        // if(data.active!=false){
        //   this.router.navigate(["docprofile"]).then(()=>{
        //     window.location.reload();
        //   });
        // }else{ 
        //   this.router.navigate(["activemaker"]).
        // then(()=>{
        //       window.location.reload();
        // });
        // }
      });
    }else if(this.departmentNo==12){
      this.emploginservice.HelperByEmailAndPasswordAndDeptNo(this.departmentNo!,this.email!, this.password!)
      .subscribe(data=>{
      window.sessionStorage.setItem("helperData",data.toString());
      window.sessionStorage.setItem("helperIDData",data.hEmpId.toString());
      if(data.active==false){
        this.router.navigate(["activemaker"]).then(()=>{
          window.location.reload();
        });
      }
      this.router.navigate(["helperprofile"]).
      then(()=>{
            window.location.reload();
      });
      });
    }else if(this.departmentNo==13){
      this.emploginservice.LabEmpByEmailAndPasswordAndDeptNo(this.departmentNo!,this.email!, this.password!)
      .subscribe(data=>{
      window.sessionStorage.setItem("LabEmpData",data.toString());
      window.sessionStorage.setItem("LabEmpIdData",data.lEmpId.toString());
      if(data.active==false){
        this.router.navigate(["activemaker"]).then(()=>{
          window.location.reload();
        });
      }
      this.router.navigate(["labassprofile"]).
      then(()=>{
            window.location.reload();
      });
      });
    }else if(this.departmentNo==14){
      this.emploginservice.ReceptionistByEmailAndPasswordAndDeptNo(this.departmentNo!,this.email!, this.password!)
      .subscribe(data=>{
      window.sessionStorage.setItem("RecpData",data.toString());
      window.sessionStorage.setItem("RecpIdData",data.rEmpId.toString());
      if(data.active==false){
        this.router.navigate(["activemaker"]).then(()=>{
          window.location.reload();
        });
      }
      this.router.navigate(["recepprofile"]).
      then(()=>{
            window.location.reload();
      });
      });
    }else{
      alert("Email or Password Incorrect");
      this.router.navigate(["Employeelogin"]);
    }
    
    
  }
  btn_Cancel():void{
    this.router.navigate(["home"]).then(()=>{
      window.location.reload();
    });
  }

}
