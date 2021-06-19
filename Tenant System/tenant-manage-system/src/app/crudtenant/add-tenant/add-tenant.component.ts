import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ServicesService } from '../services/services.service';
import {Router} from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-signup',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnInit {
    hide = true;

  constructor(private formBuilder: FormBuilder,
              private servicesService: ServicesService,
              private router: Router
    ) { }


  addForm!: FormGroup;
  token: any;
  ngOnInit() {
   this.token =  window.localStorage.getItem('token');
   console.log(this.token);

   if(!this.token){
      this.router.navigate(['/login_tenant']);
   }  

   this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      phonenum: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  onSubmit() {
    // more code will come here
    console.log(this.addForm.value);

    this.servicesService.createUser(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['/view-tenant']);
    });
  }

}
