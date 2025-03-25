import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDoctor } from '../../Models/IDoctor';
import { ManagdocService } from '../../Services/Admin/AdminOperational/Doctor/managdoc.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../Services/Navbar/navbar.service';

@Component({
  selector: 'app-docprofile',
  templateUrl: './docprofile.component.html',
  styleUrl: './docprofile.component.css'
})
export class DocprofileComponent implements OnInit,OnDestroy {
  emp : IDoctor;

  constructor(private managedocservice:ManagdocService,private navbarservice:NavbarService,private router:Router){
    this.emp={docEmpId:0,name:"",specialization:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnDestroy(): void {
    this.navbarservice.display();
  }
  ngOnInit(): void {
    debugger;
    this.navbarservice.hide();
    this.managedocservice.GetDoctorByID(parseInt(window.sessionStorage.getItem("DocEmpIdData")!.toString()))
    .subscribe(data=>this.emp=data);
  }
  validation():boolean{
    if(this.emp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_UpdateDoc():void{
    debugger;
    // this.emp.active=false;
    // this.emp.logged=false;
    this.emp.deptsNo=11;
    this.emp.docEmpId=parseInt(this.emp!.docEmpId.toString());
    this.emp.deptsNo=parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managedocservice.UpdateDoctor(this.emp!).subscribe(data=>alert(data));
      this.router.navigate(["employeeprofile/docprofile"]).then(()=>{
        window.location.reload();
      })
    }
  }
  btn_LogOut():void{
    window.sessionStorage.clear();
    this.router.navigate(["home"]);
  }



  
}
