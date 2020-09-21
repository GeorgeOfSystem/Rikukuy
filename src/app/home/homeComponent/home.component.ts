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
  userLogged = this.auth.userLogged;

  constructor(private auth : AuthService,private authFire : AngularFireAuth , private router : Router) { }

  ngOnInit() : void {
    console.log('home',this.userLogged);
  }

  onLogout() : void{
    this.auth.onLogout();
    this.router.navigate(['/login'])
    this.auth.userLogged=null;
  }
}