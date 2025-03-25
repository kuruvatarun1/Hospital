import { Component, OnInit } from '@angular/core';
import { IHelper } from '../../../Models/IHelper';
import { ManaghelperService } from '../../../Services/Admin/AdminOperational/Helper/managhelper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatehelper',
  templateUrl: './updatehelper.component.html',
  styleUrl: './updatehelper.component.css'
})
export class UpdatehelperComponent implements OnInit {

  emp : IHelper;
  constructor(private managehelperservice:ManaghelperService,private router:Router){
    this.emp={hEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    debugger;
    this.managehelperservice.GetHelperByID(parseInt(window.sessionStorage.getItem("helperIDData")!.toString()))
    .subscribe(data=>this.emp=data);
  }
  validation():boolean{
    if(this.emp.name==""){
      alert("Please Enter Name");
      return false;
    }
    return true;
  }
  btn_UpdateHelper():void{
    debugger;
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=12;
    this.emp.hEmpId=parseInt(this.emp!.hEmpId.toString());
    this.emp.deptsNo=parseInt(this.emp!.deptsNo.toString());

    if(this.validation()){
      this.managehelperservice.UpdateHelper(this.emp!).subscribe(data=>alert(data));
      this.router.navigate(["adminprofilemain/managehelper"]).then(()=>{
        window.location.reload();
      })
    }
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managehelper"]);
  }
    
}
