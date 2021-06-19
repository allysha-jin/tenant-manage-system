import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HeaderComponent } from './header/header.component';


import{ LoginAdminComponent } from './login_admin/loginadmin.component';
import{ LoginTenantComponent } from './login_tenant/logintenant.component';
import{ AboutComponent } from './about_us/about.component';
import{ SignupTenantComponent } from './signup_tenant/signuptenant.component';
import{ HomeComponent } from './home/home.component';
import{ MainHomeComponent } from './main_home/mainhome.component';

import{ RoomGuestComponent} from './room_guest/roomguest.component';
import { BookingComponent } from './room/booking/booking.component';

import{ DialogSignupComponent } from './dialog/signup-dialog.component';
import{ ForgotPasswordComponent } from './dialog/forgot-password.component';
import{ FileConfirmComponent } from './dialog/file-confirm.component';

import { TenantComplainComponent } from './tenant-complaint/tenant-complaint.component';
import { TenantPaymentComponent } from './tenant-payment/tenant-payment.component';
import { TenantProfileComponent } from './tenant-profile/tenant-profile.component';
import { TenantReportComponent } from './tenant-report/tenant-report.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';

import { ViewTenantComponent } from './crudtenant/view-tenant/view-tenant.component';
import { AddTenantComponent } from './crudtenant/add-tenant/add-tenant.component';
import { EditTenantComponent } from './crudtenant/edit-tenant/edit-tenant.component';


const routes: Routes = [
  // redirect to home page
  {path: '', redirectTo: 'home', pathMatch: 'full' },  
  {path: 'about_us', component: AboutComponent},
  {path: 'login_admin', component: LoginAdminComponent},
  {path: 'login_tenant', component: LoginTenantComponent},
  {path: 'signup_tenant', component: SignupTenantComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'main_home', component: MainHomeComponent},

  {path: 'room_guest', component: RoomGuestComponent},
  {path: 'booking', component: BookingComponent},

  {path: 'signup-dialog', component: DialogSignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'file-confirm', component: FileConfirmComponent},

  {path: 'tenant-complaint', component:TenantComplainComponent},
  {path: 'tenant-payment', component: TenantPaymentComponent},
  {path: 'tenant-profile', component: TenantProfileComponent},
  {path: 'tenant-report', component: TenantReportComponent},

  {path: 'admin-home', component: AdminHomeComponent},

  {path: 'add-tenant', component: AddTenantComponent},
  {path: 'edit-tenant', component: EditTenantComponent},
  {path: 'view-tenant', component: ViewTenantComponent}


  

  // {path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
