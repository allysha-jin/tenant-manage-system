import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import {Router} from '@angular/router';
import { User } from 'src/app/Model/user';
@Component({
  selector: 'app-view',
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.css']
})
export class ViewTenantComponent implements OnInit {
  users: any;

  constructor( 
    private servicesService: ServicesService,
    private router : Router
    ) { }

  ngOnInit() {

    this.servicesService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });

  }


  deleteUser(user: User): void {
    this.servicesService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter((u: User) => u !== user);
      });
  }

  edit(user: User): void {
    this.router.navigate(['/edit-tenant' + user.id]);
  }


}
