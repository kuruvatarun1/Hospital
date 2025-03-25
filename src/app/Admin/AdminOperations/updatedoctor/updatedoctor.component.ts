import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../../Models/IDoctor';
import { ManagdocService } from '../../../Services/Admin/AdminOperational/Doctor/managdoc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrl: './updatedoctor.component.css'
})
export class UpdatedoctorComponent implements OnInit {

  emp : IDoctor;
  constructor(private managedocservice:ManagdocService,private router:Router){
    this.emp={docEmpId:0,name:"",specialization:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    debugger;
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
      this.router.navigate(["adminprofilemain/managedoc"]).then(()=>{
        window.location.reload();
      })
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managedoc"]);
  }

}
