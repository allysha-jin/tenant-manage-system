import { Component,Injectable,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({providedIn: 'root'})

export class AppComponent implements OnInit{
  title = 'tenant-manage-system';

  constructor(private router:Router){
  }
  token: any;
  
  ngOnInit(): void {
  }

  goToPage(pageName:string):void{
    this.router.navigate(['/home']);;
  }
  
  
  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


}
