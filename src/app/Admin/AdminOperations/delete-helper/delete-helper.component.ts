import { Component } from '@angular/core';
import { ManaghelperService } from '../../../Services/Admin/AdminOperational/Helper/managhelper.service';
import { Router } from '@angular/router';
import { IHelper } from '../../../Models/IHelper';

@Component({
  selector: 'app-delete-helper',
  templateUrl: './delete-helper.component.html',
  styleUrl: './delete-helper.component.css'
})
export class DeleteHelperComponent {

  emp:IHelper;
  httpResponse?:string;
  
  constructor(private managehelperservice:ManaghelperService,private router:Router){
    this.emp={hEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    this.managehelperservice.GetHelperByID(parseInt(window.sessionStorage.getItem
      ("helperIDData")!.toString())).subscribe(data=>this.emp=data);
  }

  btn_DeleteHelper():void{
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=12;
    this.managehelperservice.DeleteHelper(parseInt(window.sessionStorage.getItem("helperIDData")!.toString()))
    .subscribe(data=>alert(data));
    this.router.navigate(["adminprofilemain/managehelper"]);
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managehelper"]);
  }

}
