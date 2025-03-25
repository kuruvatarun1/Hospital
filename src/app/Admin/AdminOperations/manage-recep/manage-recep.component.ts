import { Component, OnInit } from '@angular/core';
import { ManagrecepService } from '../../../Services/Admin/AdminOperational/Recep/managrecep.service';
import { Router } from '@angular/router';
import { IRecep } from '../../../Models/IReceptionist';

@Component({
  selector: 'app-manage-recep',
  templateUrl: './manage-recep.component.html',
  styleUrl: './manage-recep.component.css'
})
export class ManageRecepComponent implements OnInit {

  recpList?:IRecep[];

  constructor(private managerecepservice:ManagrecepService,private router:Router){

  }
  ngOnInit(): void {
    this.managerecepservice.AllReceptionists().subscribe(data=>this.recpList=data);
  }
  btn_UpdateRecp(REmpId:number):void{
    debugger;
    window.sessionStorage.setItem("RecpIdData",REmpId.toString());
    this.router.navigate(["adminprofilemain/updaterecep"]);
  }
  btn_DeleteRecp(REmpId:number):void{
    debugger;
    window.sessionStorage.setItem("RecpIdData",REmpId.toString());
    this.router.navigate(["adminprofilemain/deleterecep"]);
  }

}
