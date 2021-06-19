import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


// main pages
import{ LoginAdminComponent } from './login_admin/loginadmin.component';
import{ LoginTenantComponent } from './login_tenant/logintenant.component';
import{ AboutComponent } from './about_us/about.component';
import{ SignupTenantComponent } from './signup_tenant/signuptenant.component';
import{ HomeComponent } from './home/home.component';
import{ HeaderComponent } from './header/header.component';
import{ MainHomeComponent } from './main_home/mainhome.component';
import{ RoomGuestComponent} from './room_guest/roomguest.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

// dialog
import{ DialogSignupComponent } from './dialog/signup-dialog.component';
import{ ForgotPasswordComponent } from './dialog/forgot-password.component';
import{ FileConfirmComponent } from './dialog/file-confirm.component';

// tenant pages
import { TenantComplainComponent } from './tenant-complaint/tenant-complaint.component';
import { TenantPaymentComponent } from './tenant-payment/tenant-payment.component';
import { TenantProfileComponent } from './tenant-profile/tenant-profile.component';
import { TenantReportComponent } from './tenant-report/tenant-report.component';

//admin pages
import { AdminHomeComponent } from './admin-home/admin-home.component';

//add

import { TokenInterceptor } from './Model/interceptors';
import { BookingComponent } from './room/booking/booking.component';
import { ViewTenantComponent } from './crudtenant/view-tenant/view-tenant.component';
import { AddTenantComponent } from './crudtenant/add-tenant/add-tenant.component';
import { EditTenantComponent } from './crudtenant/edit-tenant/edit-tenant.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_4Ha0lLLwid7iebaQKU5fxdT83XLSca0",
  authDomain: "tenant-management-system-59cb3.firebaseapp.com",
  databaseURL: "https://tenant-management-system-59cb3-default-rtdb.firebaseio.com",
  projectId: "tenant-management-system-59cb3",
  storageBucket: "tenant-management-system-59cb3.appspot.com",
  messagingSenderId: "46969521840",
  appId: "1:46969521840:web:af51f5d01fc2b829fedd75",
  measurementId: "G-5LVCNVP0GQ"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    
    LoginAdminComponent,
    LoginTenantComponent,
    AboutComponent,
    SignupTenantComponent,
    MainHomeComponent,
    RoomGuestComponent,

    // dialog
    ForgotPasswordComponent,
    DialogSignupComponent,
    FileConfirmComponent,

    // tenant pages
    TenantComplainComponent,
    TenantPaymentComponent,
    TenantProfileComponent,
    TenantReportComponent,

    //admin pages
    AdminHomeComponent,

    //add

    VerifyEmailComponent,
    BookingComponent,
    ViewTenantComponent,
    AddTenantComponent,
    EditTenantComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModule,
    MatNativeDateModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,


  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
