import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../../Models/IDoctor';
import { IOpDepts } from '../../../Models/IOpDepartments';
import { ManagdocService } from '../../../Services/Admin/AdminOperational/Doctor/managdoc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdoc',
  templateUrl: './registerdoc.component.html',
  styleUrl: './registerdoc.component.css'
})
export class RegisterdocComponent implements OnInit {
  docemp:IDoctor;
  httpResponse?:string;
  //ListDepts?:IOpDepts;

  constructor(private managedocservice:ManagdocService,private router:Router){
    this.docemp={docEmpId:0,name:"",specialization:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    
  }

  validation():boolean{   
    if(this.docemp.name ==""){
      alert("Please enter name...!");
      return false;
    }
    return true;
  }
  btn_RegisterDoc():void{
    debugger;
    this.docemp.active=false;
    this.docemp.logged=false;
    this.docemp.logintime="2024-03-20";
    this.docemp.logouttime="2024-03-20";
    this.docemp.deptsNo=11;
    this.docemp.deptsNo = parseInt(this.docemp!.deptsNo.toString());

    if(this.validation()){
      this.managedocservice.InsertDoctor(this.docemp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managedoc"])
      .then(()=>{
        window.location.reload();
      });
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managedoc"]);
  }
  btn_Reset():void{
    //window.sessionStorage.clear();
    window.location.reload();
  }

}
