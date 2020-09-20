import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthService,private authFire : AngularFireAuth , private router : Router) { }

  ngOnInit() : void {
    this.getCurrentUser();
  }

  onLogout() : void{
    this.auth.onLogout();
    this.router.navigate(['/login'])
  }

  getCurrentUser() : void {
    this.auth.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged');
      }else{
        console.log('Not user logged');
      }
    });
  }
}