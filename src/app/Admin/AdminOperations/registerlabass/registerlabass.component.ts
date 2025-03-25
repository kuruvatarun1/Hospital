import { Component, OnInit } from '@angular/core';
import { ILabAss } from '../../../Models/ILabAssistant';
import { ManaglabassService } from '../../../Services/Admin/AdminOperational/LabAss/managlabass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerlabass',
  templateUrl: './registerlabass.component.html',
  styleUrl: './registerlabass.component.css'
})
export class RegisterlabassComponent implements OnInit {

  emp:ILabAss;
  httpResponse?:string;

  constructor(private managelabassservice:ManaglabassService,private router:Router){
    this.emp={lEmpId:0,name:"",email:"",password:"",phone:"",gender:"",address:"",
    deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    
  }
  validation():boolean{
    if(this.emp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_RegLabass():void{
    debugger;
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.logintime="2024-03-20";
    this.emp.logouttime="2024-03-20";
    this.emp.deptsNo=13;
    this.emp.deptsNo = parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managelabassservice.InsertLabEmployee(this.emp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managelabass"])
      .then(()=>{
        window.location.reload();
      });
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managelabass"]);
  }
  btn_Reset():void{
    //window.sessionStorage.clear();
    window.location.reload();
  }

}
