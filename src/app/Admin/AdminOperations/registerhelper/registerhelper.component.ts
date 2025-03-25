import { Component, OnInit } from '@angular/core';
import { IHelper } from '../../../Models/IHelper';
import { ManaghelperService } from '../../../Services/Admin/AdminOperational/Helper/managhelper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerhelper',
  templateUrl: './registerhelper.component.html',
  styleUrl: './registerhelper.component.css'
})
export class RegisterhelperComponent implements OnInit {

  hlpEmp:IHelper;
  httpResponse?:string;

  constructor(private managehelperservice:ManaghelperService,private router:Router){
    this.hlpEmp={hEmpId:0,name:"",email:"",password:"",phone:"",gender:"",address:"",
    deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    
  }
  validation():boolean{
    if(this.hlpEmp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_RegHelper():void{
    debugger;
    this.hlpEmp.active=false;
    this.hlpEmp.logged=false;
    this.hlpEmp.logintime="2024-03-20";
    this.hlpEmp.logouttime="2024-03-20";
    this.hlpEmp.deptsNo=12;
    this.hlpEmp.deptsNo = parseInt(this.hlpEmp!.deptsNo.toString());

    if(this.validation()){
      this.managehelperservice.InsertHelper(this.hlpEmp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managehelper"])
      .then(()=>{
        window.location.reload();
      });
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managehelper"]);
  }
  btn_Reset():void{
    //window.sessionStorage.clear();
    window.location.reload();
  }

}
