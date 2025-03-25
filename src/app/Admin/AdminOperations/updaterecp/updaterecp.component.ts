import { Component, OnInit } from '@angular/core';
import { IRecep } from '../../../Models/IReceptionist';
import { ManagrecepService } from '../../../Services/Admin/AdminOperational/Recep/managrecep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updaterecp',
  templateUrl: './updaterecp.component.html',
  styleUrl: './updaterecp.component.css'
})
export class UpdaterecpComponent implements OnInit {

  emp : IRecep;
  constructor(private managerecepservice:ManagrecepService,private router:Router){
    this.emp={rEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    debugger;
    this.managerecepservice.GetReceptionistByID(parseInt(window.sessionStorage.getItem("RecpIdData")!.toString()))
    .subscribe(data=>this.emp=data);
  }
  validation():boolean{
    if(this.emp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_UpdateRecep():void{
    debugger;
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=14;
    this.emp.rEmpId=parseInt(this.emp!.rEmpId.toString());
    this.emp.deptsNo=parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managerecepservice.UpdateReceptionist(this.emp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managerecep"]).then(()=>{
        window.location.reload();
      })
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managerecep"]);
  }

}
