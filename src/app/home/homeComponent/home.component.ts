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
  userLogged;

  constructor(private auth : AuthService,private authFire : AngularFireAuth , private router : Router) { }

  ngOnInit() : void {
    this.getUserlogged();
  }

  onLogout() : void{
    this.auth.onLogout();
    this.router.navigate(['/login'])
    this.auth.setUser(null);
  }

  getUserlogged() : void {
    this.userLogged = this.auth.getUser;
  }
}