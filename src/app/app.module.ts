import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminProfileMainComponent } from './Admin/admin-profile-main/admin-profile-main.component';
import { AdminProfileChildComponent } from './Admin/admin-profile-child/admin-profile-child.component';
import { DeleteDoctorComponent } from './Admin/AdminOperations/delete-doctor/delete-doctor.component';
import { ManageDoctorComponent } from './Admin/AdminOperations/manage-doctor/manage-doctor.component';
import { ManageHelperComponent } from './Admin/AdminOperations/manage-helper/manage-helper.component';
import { DeleteHelperComponent } from './Admin/AdminOperations/delete-helper/delete-helper.component';
import { DeleteLabAssComponent } from './Admin/AdminOperations/delete-lab-ass/delete-lab-ass.component';
import { ManageLabAssComponent } from './Admin/AdminOperations/manage-lab-ass/manage-lab-ass.component';
import { DeleteRecepComponent } from './Admin/AdminOperations/delete-recep/delete-recep.component';
import { ManageRecepComponent } from './Admin/AdminOperations/manage-recep/manage-recep.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminloginService } from './Services/Admin/adminlogin.service';
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

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminProfileMainComponent,
    AdminProfileChildComponent,
    DeleteDoctorComponent,
    ManageDoctorComponent,
    ManageHelperComponent,
    DeleteHelperComponent,
    DeleteLabAssComponent,
    ManageLabAssComponent,
    DeleteRecepComponent,
    ManageRecepComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    UpdatedoctorComponent,
    UpdatehelperComponent,
    UpdatelabassComponent,
    UpdaterecpComponent,
    RegisterdocComponent,
    RegisterhelperComponent,
    RegisterlabassComponent,
    RegisterrecepComponent,
    EmployeeLoginComponent,
    EmployeeprofileComponent,
    DocprofileComponent,
    HelperprofileComponent,
    LabassprofileComponent,
    RecepprofileComponent,
    ActivemakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    AdminloginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
