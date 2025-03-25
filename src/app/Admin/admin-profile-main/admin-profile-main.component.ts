import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../../Services/Admin/adminlogin.service';
import { NavbarService } from '../../Services/Navbar/navbar.service';

@Component({
  selector: 'app-admin-profile-main',
  templateUrl: './admin-profile-main.component.html',
  styleUrl: './admin-profile-main.component.css'
})
export class AdminProfileMainComponent implements OnInit,OnDestroy {
  
  constructor(private router:Router , private adminloginservice:AdminloginService,private navbarservice:NavbarService){

  }
  ngOnDestroy(): void {
    this.navbarservice.display();
  }
  
  ngOnInit(): void {
    this.navbarservice.hide();
    if(window.sessionStorage.getItem("AdminData")==null){
      this.router.navigate(["adminlogin"]);
    }
  }

  btn_MyProfile():void{
    this.router.navigate(["adminprofilemain/adminprofilechild"]);
  }
  btn_MngDoc():void{
    this.router.navigate(["adminprofilemain/managedoc"]);
  }
  btn_RegisterDoc():void{
    this.router.navigate(["adminprofilemain/registerdoc"]);
  }
  btn_MngHelper():void{
    this.router.navigate(["adminprofilemain/managehelper"]);
  }
  btn_RegisterHelper():void{
    this.router.navigate(["adminprofilemain/registerhelper"]);
  }
  btn_MngLabass():void{
    this.router.navigate(["adminprofilemain/managelabass"]);
  }
  btn_RegisterLabass():void{
    this.router.navigate(["adminprofilemain/registerlabass"]);
  }
  btn_MngRecp():void{
    this.router.navigate(["adminprofilemain/managerecep"]);
  }
  btn_RegisterRecp():void{
    this.router.navigate(["adminprofilemain/registerrecep"]);
  }
  btn_Logout():void{
    window.sessionStorage.clear();
    this.router.navigate(["adminlogin"])
    .then(()=>{
      window.location.reload();
    })
  }
  
}