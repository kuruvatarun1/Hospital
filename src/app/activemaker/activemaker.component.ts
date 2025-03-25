import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../Services/Employee/emplogin.service';
import { Router } from '@angular/router';
import { EmployeeLoginComponent } from '../employee-login/employee-login.component';

@Component({
  selector: 'app-activemaker',
  templateUrl: './activemaker.component.html',
  styleUrl: './activemaker.component.css'
})
export class ActivemakerComponent implements OnInit {

  constructor(private emploginservice:EmploginService,private router:Router, private emplogincomponent:EmployeeLoginComponent){

  }
  ngOnInit(): void {
    
  }
  btn_Active():void{
    
    
  }

}
