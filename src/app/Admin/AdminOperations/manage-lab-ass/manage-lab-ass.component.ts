import { Component, OnInit } from '@angular/core';
import { ILabAss } from '../../../Models/ILabAssistant';
import { ManaglabassService } from '../../../Services/Admin/AdminOperational/LabAss/managlabass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-lab-ass',
  templateUrl: './manage-lab-ass.component.html',
  styleUrl: './manage-lab-ass.component.css'
}) 
export class ManageLabAssComponent implements OnInit {

  labemplist?:ILabAss[];

  constructor(private managelabassservice:ManaglabassService,private router:Router){

  }

  ngOnInit(): void {
    this.managelabassservice.AllLabEmployees().subscribe(data=>this.labemplist=data);
  }

  btn_Updatelabass(labempId:number):void{
    debugger;
    window.sessionStorage.setItem("LabEmpIdData",labempId.toString());
    //window.localStorage.setItem("LabEmpIdData",labempId.toString());
    this.router.navigate(["adminprofilemain/updatelabass"]);
  }

  btn_Deletelabass(labempId:number):void{
    debugger;
    window.sessionStorage.setItem("LabEmpIdData",labempId.toString());
    this.router.navigate(["adminprofilemain/deletelabass"]);
  }

}
