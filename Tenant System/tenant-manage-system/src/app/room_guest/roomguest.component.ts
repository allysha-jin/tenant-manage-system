import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogSignupComponent } from '../dialog/signup-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './roomguest.component.html',
  styleUrls: ['./roomguest.component.css']
})
export class RoomGuestComponent {
  title = 'tenantsystem';
  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(DialogSignupComponent,{height:'90%',width:'65%'});
  // }

}

// @Component({
//   selector: 'app-root',
//   templateUrl: 'signup-dialog.component.html',
// })
// export class DialogSignupComponent {}