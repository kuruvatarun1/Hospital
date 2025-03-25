import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrl: './employeeprofile.component.css'
})
export class EmployeeprofileComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
  }
  btn_MyProfile():void{
    
  }
  btn_LogOut():void{
    window.sessionStorage.clear();
    this.router.navigate(["home"]);
  }
}
