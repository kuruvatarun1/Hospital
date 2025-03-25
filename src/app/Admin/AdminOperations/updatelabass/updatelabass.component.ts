import { Component, OnInit } from '@angular/core';
import { ILabAss } from '../../../Models/ILabAssistant';
import { ManaglabassService } from '../../../Services/Admin/AdminOperational/LabAss/managlabass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatelabass',
  templateUrl: './updatelabass.component.html',
  styleUrl: './updatelabass.component.css'
})
export class UpdatelabassComponent implements OnInit {

  emp : ILabAss;
  constructor(private managelabassservice:ManaglabassService,private router:Router){
    this.emp={lEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    debugger;
    this.managelabassservice.GetLabEmployeeByEmpID(parseInt(window.sessionStorage.getItem("LabEmpIdData")!.toString()))
    .subscribe(data=>this.emp=data);
  }
  validation():boolean{
    if(this.emp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_UpdateLabass():void{
    debugger;
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=13;
    this.emp.lEmpId=parseInt(this.emp!.lEmpId.toString());
    this.emp.deptsNo=parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managelabassservice.UpdateLabEmployee(this.emp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managelabass"]).then(()=>{
        window.location.reload();
      })
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managelabass"]);
  }

}
