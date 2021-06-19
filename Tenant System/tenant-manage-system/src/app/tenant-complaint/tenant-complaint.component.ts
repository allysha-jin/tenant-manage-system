import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './tenant-complaint.component.html',
  styleUrls: ['./tenant-complaint.component.css']
})

export class TenantComplainComponent{
  myForm!: FormGroup;
  post: any='';
  constructor(public fb: FormBuilder) { }
  
  ngOnInit() {
    this.reactiveForm(); 
  }

  reactiveForm(){
      this.myForm = this.fb.group({
      serial:['',[Validators.required]],
      type:['',[Validators.required]],
      status:['',[Validators.required]],
      date:['',[Validators.required]]

      });
  }


  submitForm() {
    console.log(this.myForm)
  }

}
