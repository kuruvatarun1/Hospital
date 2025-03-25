import { Component, OnInit } from '@angular/core';
import { IHelper } from '../../../Models/IHelper';
import { ManaghelperService } from '../../../Services/Admin/AdminOperational/Helper/managhelper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-helper',
  templateUrl: './manage-helper.component.html',
  styleUrl: './manage-helper.component.css'
})
export class ManageHelperComponent implements OnInit {

  helperList?:IHelper[];

  constructor(private managehelperservice:ManaghelperService,private router:Router){

  }
  ngOnInit(): void {
    this.managehelperservice.AllHelpers().subscribe(data=>this.helperList=data);
  }

  btn_Updatehlp(helperID:number):void{
    debugger;
    window.sessionStorage.setItem("helperIDData",helperID.toString());
    this.router.navigate(["adminprofilemain/updatehelper"]);
  }
  btn_Deletehlp(helperID:number):void{
    debugger;
    window.sessionStorage.setItem("helperIDData",helperID.toString());
    this.router.navigate(["adminprofilemain/deletehelper"]);
  }

}
