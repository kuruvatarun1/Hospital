import { Component } from '@angular/core';
import { IRecep } from '../../../Models/IReceptionist';
import { ManagrecepService } from '../../../Services/Admin/AdminOperational/Recep/managrecep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-recep',
  templateUrl: './delete-recep.component.html',
  styleUrl: './delete-recep.component.css'
})
export class DeleteRecepComponent {

  emp:IRecep;
  httpResponse?:string;
  
  constructor(private managerecepservice:ManagrecepService,private router:Router){
    this.emp={rEmpId:0,name:"",email:"",password:"",phone:"",gender:"",
    address:"",deptsNo:0,active:false,logged:false,logintime:"",logouttime:""}
  }
  ngOnInit(): void {
    this.managerecepservice.GetReceptionistByID(parseInt(window.sessionStorage.getItem
      ("RecpIdData")!.toString())).subscribe(data=>this.emp=data);
  }

  btn_DeleteRecep():void{
    this.emp.active=false;
    this.emp.logged=false;
    this.emp.deptsNo=14;
    this.managerecepservice.DeleteReceptionist(parseInt(window.sessionStorage.getItem("RecpIdData")!.toString()))
    .subscribe(data=>alert(data));
    this.router.navigate(["adminprofilemain/managerecep"])
    .then(()=>{
      window.location.reload();
    });
  }
  btn_Cancel():void{
    this.router.navigate(["adminprofilemain/managerecep"]);
  }

}
