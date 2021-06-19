import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginAdminComponent {

  hide = true;

  loginForm: FormGroup;
  // username: any;
  // password: any;
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.username.hasError('username') ? 'Not a valid username' : '';

  // }

  onSubmit() {
    console.log(this.loginForm)
  }
}
