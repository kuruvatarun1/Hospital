import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploginService } from '../Services/Employee/emplogin.service';
import { NavbarService } from '../Services/Navbar/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  shownavbar : boolean = true;
  subscription : Subscription;
  constructor (private navbarservice:NavbarService,private router:Router){
    this.subscription = this.navbarservice.shownavbar.subscribe((value)=>{
      this.shownavbar = value;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  btn_AdminLogin():void{
    this.router.navigate(["adminlogin"])
    .then(()=>{
      window.location.reload();
    });
  }
  btn_EmpLogin():void{
    this.router.navigate(["employeelogin"])
    .then(()=>{
      window.location.reload();
    });
  }

}
