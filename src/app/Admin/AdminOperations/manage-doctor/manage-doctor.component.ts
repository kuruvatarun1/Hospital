import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../../Models/IDoctor';
import { ManagdocService } from '../../../Services/Admin/AdminOperational/Doctor/managdoc.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrl: './manage-doctor.component.css'
})
export class ManageDoctorComponent implements OnInit {

  doclist?:IDoctor[];

  constructor(private managedocservice:ManagdocService,private router:Router){

  }

  ngOnInit(): void {
    this.managedocservice.AllDoctors().subscribe(data=>this.doclist=data);
  }
  btnUpdateDoc_click(DocEmpId:number):void{
    debugger;
    window.sessionStorage.setItem("DocEmpIdData",DocEmpId.toString()!);
    this.router.navigate(["adminprofilemain/updatedoc"]);
  }
  btnDeleteDoc_click(DocEmpId:number):void{
    debugger;
    window.sessionStorage.setItem("DocEmpIdData",DocEmpId.toString()!);
    this.router.navigate(["adminprofilemain/deletedoc"]);
  }

}