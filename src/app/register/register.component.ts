import { Component } from '@angular/core';
import { AdminloginService } from '../Services/Admin/adminlogin.service';
import { IAdmin } from '../Models/IAdmin';
import { IADept } from '../Models/IAdminDepts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Ad:IAdmin ;
  DeptList?:IADept[];

constructor(private Admdept:AdminloginService,private router:Router){

  this.Ad={adminID:0,adminName:"",gender:"",email:"",password:"",phone:"",address:"",deptNo:0,salary:0}

}
ngOnInit(){
  this.Admdept.GetAlldepartments().subscribe(data =>this.DeptList = data , error => alert(error));
}

Validation():boolean{
  if(this.Ad.adminName==""){
    alert("please enter Admin name...!");
    return false;
  }
  else if(this.Ad.email==""){
    alert("please enter email...!");    
    return false;   
  }
  else if(this.Ad.gender==""){
    alert("please enter gender");
    return false;
  }
  else if(this.Ad.password==""){
    alert("please enter Email...!");
    return false;
  }

  else if(this.Ad.address==""){
    alert("please enter address");
    return false;
  }
  else if(this.Ad.deptNo==0){
    alert("please enter Department");
    return false;
  }
  else if(this.Ad.phone==""){
    alert("please enter Phone Number");
    return false;
  }
  return true;
}

btnregister():void{
  debugger;
  
  if (this.Validation()){
    this.Ad.adminName = this.Ad.adminName 
    this.Ad.password=this.Ad.password
    this.Ad.gender=this.Ad.gender
    this.Ad.email=this.Ad.email
    this.Ad.phone=this.Ad.phone
    this.Ad.address=this.Ad.address
    this.Ad.adminID=parseInt(this.Ad.adminID!.toString())
    this.Ad.deptNo=parseInt(this.Ad.deptNo!.toString());
    this.Admdept.InsertAdmin(this.Ad).subscribe(data=>alert(data + "Record inserted Successfully...!"));
    alert("Record Inserted Successfully");
    this.router.navigate(["home"]).then(() =>{
      window.location.reload();
    });
  }  
  }


}
