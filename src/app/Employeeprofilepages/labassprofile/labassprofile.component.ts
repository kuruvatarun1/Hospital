import { Component, OnInit } from '@angular/core';
import { ILabAss } from '../../Models/ILabAssistant';
import { ManaglabassService } from '../../Services/Admin/AdminOperational/LabAss/managlabass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labassprofile',
  templateUrl: './labassprofile.component.html',
  styleUrl: './labassprofile.component.css'
})
export class LabassprofileComponent implements OnInit {
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

}
