import { Component, OnInit } from '@angular/core';
import { IRecep } from '../../../Models/IReceptionist';
import { ManageRecepComponent } from '../manage-recep/manage-recep.component';
import { Router } from '@angular/router';
import { ManagrecepService } from '../../../Services/Admin/AdminOperational/Recep/managrecep.service';

@Component({
  selector: 'app-registerrecep',
  templateUrl: './registerrecep.component.html',
  styleUrl: './registerrecep.component.css'
})
export class RegisterrecepComponent implements OnInit {

  emp:IRecep;

  constructor(private managerecepservice:ManagrecepService,private router:Router){
    this.emp={rEmpId:0,name:"",email:"",password:"",phone:"",gender:"",address:"",
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
  btn_RegRecep():void{
    debugger;
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.logintime="2024-03-20";
    this.emp.logouttime="2024-03-20";
    this.emp.deptsNo=14;
    this.emp.deptsNo = parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managerecepservice.InsertReceptionist(this.emp!).subscribe(data=>this.emp);
      this.router.navigate(["adminprofilemain/managerecep"])
      .then(()=>{
        window.location.reload();
      });
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managerecep"]);
  }
  btn_Reset():void{
    //window.sessionStorage.clear();
    window.location.reload();
  }


}
