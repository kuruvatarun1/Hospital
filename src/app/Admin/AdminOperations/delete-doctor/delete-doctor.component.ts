import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../../Models/IDoctor';
import { ManagdocService } from '../../../Services/Admin/AdminOperational/Doctor/managdoc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrl: './delete-doctor.component.css'
})
export class DeleteDoctorComponent implements OnInit {
  emp:IDoctor;
  httpResponse?:string;
  
  constructor(private managedocservice:ManagdocService,private router:Router){
    this.emp={docEmpId:0,name:"",specialization:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    this.managedocservice.GetDoctorByID(parseInt(window.sessionStorage.getItem
      ("DocEmpIdData")!.toString())).subscribe(data=>this.emp=data);
  }

  btn_DeleteDoc():void{
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=11;
    this.managedocservice.DeleteDoctor(parseInt(window.sessionStorage.getItem("DocEmpIdData")!.toString()))
    .subscribe(data=>alert(data));
    this.router.navigate(["adminprofilemain/managedoc"]);
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managedoc"]);
  }

}
