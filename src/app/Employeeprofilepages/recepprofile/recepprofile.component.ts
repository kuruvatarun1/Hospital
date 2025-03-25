import { Component, OnInit } from '@angular/core';
import { IRecep } from '../../Models/IReceptionist';
import { ManagrecepService } from '../../Services/Admin/AdminOperational/Recep/managrecep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepprofile',
  templateUrl: './recepprofile.component.html',
  styleUrl: './recepprofile.component.css'
})
export class RecepprofileComponent implements OnInit {

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

}
