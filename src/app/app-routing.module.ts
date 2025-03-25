import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminProfileMainComponent } from './Admin/admin-profile-main/admin-profile-main.component';
import { AdminProfileChildComponent } from './Admin/admin-profile-child/admin-profile-child.component';
import { DeleteDoctorComponent } from './Admin/AdminOperations/delete-doctor/delete-doctor.component';
import { ManageDoctorComponent } from './Admin/AdminOperations/manage-doctor/manage-doctor.component';
import { RegisterComponent } from './register/register.component';
import { ManageHelperComponent } from './Admin/AdminOperations/manage-helper/manage-helper.component';
import { DeleteHelperComponent } from './Admin/AdminOperations/delete-helper/delete-helper.component';
import { ManageLabAssComponent } from './Admin/AdminOperations/manage-lab-ass/manage-lab-ass.component';
import { DeleteLabAssComponent } from './Admin/AdminOperations/delete-lab-ass/delete-lab-ass.component';
import { ManageRecepComponent } from './Admin/AdminOperations/manage-recep/manage-recep.component';
import { DeleteRecepComponent } from './Admin/AdminOperations/delete-recep/delete-recep.component';
import { UpdatedoctorComponent } from './Admin/AdminOperations/updatedoctor/updatedoctor.component';
import { UpdatehelperComponent } from './Admin/AdminOperations/updatehelper/updatehelper.component';
import { UpdatelabassComponent } from './Admin/AdminOperations/updatelabass/updatelabass.component';
import { UpdaterecpComponent } from './Admin/AdminOperations/updaterecp/updaterecp.component';
import { RegisterdocComponent } from './Admin/AdminOperations/registerdoc/registerdoc.component';
import { RegisterhelperComponent } from './Admin/AdminOperations/registerhelper/registerhelper.component';
import { RegisterlabassComponent } from './Admin/AdminOperations/registerlabass/registerlabass.component';
import { RegisterrecepComponent } from './Admin/AdminOperations/registerrecep/registerrecep.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { DocprofileComponent } from './Employeeprofilepages/docprofile/docprofile.component';
import { HelperprofileComponent } from './Employeeprofilepages/helperprofile/helperprofile.component';
import { LabassprofileComponent } from './Employeeprofilepages/labassprofile/labassprofile.component';
import { RecepprofileComponent } from './Employeeprofilepages/recepprofile/recepprofile.component';
import { ActivemakerComponent } from './activemaker/activemaker.component';

const routes: Routes = [

  //{path:"**",redirectTo:"home",pathMatch:'full'},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"adminprofilemain",component:AdminProfileMainComponent,
    children:[
      //{path:"",redirectTo:"adminprofilechild",pathMatch:'full'},
      {path:"adminprofilechild",component:AdminProfileChildComponent},
      {path:"deletedoc",component:DeleteDoctorComponent}, //DOCTOR
      {path:"managedoc",component:ManageDoctorComponent}, //DOCTOR
      {path:"registerdoc",component:RegisterdocComponent}, //DOCTOR
      {path:"updatedoc",component:UpdatedoctorComponent}, //DOCTOR

      {path:"managehelper",component:ManageHelperComponent},  //HELPER
      {path:"deletehelper",component:DeleteHelperComponent},  //HELPER
      {path:"registerhelper",component:RegisterhelperComponent},  //HELPER
      {path:"updatehelper",component:UpdatehelperComponent},  //HELPER

      {path:"managelabass",component:ManageLabAssComponent},    //LABEMPLOYEE
      {path:"deletelabass",component:DeleteLabAssComponent},    //LABEMPLOYEE
      {path:"registerlabass",component:RegisterlabassComponent},  //LABEMPLOYEE
      {path:"updatelabass",component:UpdatelabassComponent},    //LABEMPLOYEE
      
      {path:"managerecep",component:ManageRecepComponent}, //RECEPTIONIST
      {path:"deleterecep",component:DeleteRecepComponent}, //RECEPTIONIST
      {path:"registerrecep",component:RegisterrecepComponent}, //RECEPTIONIST
      {path:"updaterecep",component:UpdaterecpComponent}   //RECEPTIONIST
    ]
  },
  
  {path:"employeelogin",component:EmployeeLoginComponent},
  {path:"activemaker",component:ActivemakerComponent},
  
  {path:"docprofile",component:DocprofileComponent},
  {path:"helperprofile",component:HelperprofileComponent},
  {path:"labassprofile",component:LabassprofileComponent},
  {path:"recepprofile",component:RecepprofileComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
