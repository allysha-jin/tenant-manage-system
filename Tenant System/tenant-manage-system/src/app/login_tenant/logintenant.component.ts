import { Component, OnInit, VERSION} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { ApiService } from '../api.service';
import { ForgotPasswordComponent } from '../dialog/forgot-password.component';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'my-app',
  templateUrl: './logintenant.component.html',
  styleUrls: ['./logintenant.component.css'],
  
})


export class LoginTenantComponent implements OnInit{
// password digit visibility
  hide = true;

// form
  // form
  addForm!: FormGroup;
  invalidLogin: boolean = false;
  message: any;
 
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private router:Router,private servicesService: ServicesService) {
    
  }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.addForm.value);
    if(this.addForm.invalid){
      return;
    }
    const loginData = {
      email: this.addForm.controls.email.value,
      password: this.addForm.controls.password.value
    };

    this.servicesService.login(loginData).subscribe((data: any) => {
      this.message = data.message;
     // console.log(data.token);
      if(data.token) {
          window.localStorage.setItem('token', data.token);
          this.router.navigate(['/main_home']);
       } else {
         this.invalidLogin = true;

        // alert('a' + data.message);
       }
     });
  }

  openDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }
  

}


