import { Component, OnInit } from '@angular/core';
import { ManaghelperService } from '../../Services/Admin/AdminOperational/Helper/managhelper.service';
import { Router } from '@angular/router';
import { IHelper } from '../../Models/IHelper';

@Component({
  selector: 'app-helperprofile',
  templateUrl: './helperprofile.component.html',
  styleUrl: './helperprofile.component.css'
})
export class HelperprofileComponent implements OnInit {
  
  emp : IHelper;
  constructor(private managehelperservice:ManaghelperService,private router:Router){
    this.emp = {hEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    debugger;
    this.managehelperservice.GetHelperByID(parseInt(window.sessionStorage.getItem("helperIDData")!.toString()))
    .subscribe(data=>this.emp=data)
  }

}
