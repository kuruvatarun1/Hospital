import { Component } from '@angular/core';
import { ILabAss } from '../../../Models/ILabAssistant';
import { ManaglabassService } from '../../../Services/Admin/AdminOperational/LabAss/managlabass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-lab-ass',
  templateUrl: './delete-lab-ass.component.html',
  styleUrl: './delete-lab-ass.component.css'
})
export class DeleteLabAssComponent {

  emp:ILabAss;
  httpResponse?:string;
  
  constructor(private managelabassservice:ManaglabassService,private router:Router){
    this.emp={lEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    this.managelabassservice.GetLabEmployeeByEmpID(parseInt(window.sessionStorage.getItem
      ("LabEmpIdData")!.toString())).subscribe(data=>this.emp=data);
  }

  btn_DeleteLabass():void{
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=13;
    this.managelabassservice.DeleteLabEmployee(parseInt(window.sessionStorage.getItem("LabEmpIdData")!.toString()))
    .subscribe(data=>alert(data));
    this.router.navigate(["adminprofilemain/managelabass"]);
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managelabass"]);
  }

}
