import { PipeTransform } from '@angular/core';
import { Component, Pipe } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogSignupComponent } from 'src/app/dialog/signup-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  title = 'tenantsystem';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogSignupComponent);
  }

  roomtype!: string;
  
  users: any[] = [
    { name: 'Kristy', roomtype: 'female' },
    { name: 'Nick', roomtype: 'male'  },
    { name: 'Ariana', roomtype: 'female' },
    { name: 'Joe', roomtype: 'male' },
    { name: 'Albert', roomtype: 'male' },
  ];

}

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
  

    return value ? list.filter(item => item.roomtype === value) : list;
  }

}
// @Component({
//   selector: 'app-root',
//   templateUrl: 'signup-dialog.component.html',
// })
// export class DialogSignupComponent {}