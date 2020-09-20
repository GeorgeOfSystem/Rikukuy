import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

   constructor(public authfire : AngularFireAuth, private router : Router ) {
  }

  onLoginGoogle() : void{
    this.authfire.signInWithPopup(new auth.GoogleAuthProvider());
    
    if(this.authfire.user){
      this.router.navigate(['/home']);
    }
  }

  onLoginFacebook() : void{
    this.authfire.signInWithPopup(new auth.FacebookAuthProvider());
    
    if(this.authfire.user){
      this.router.navigate(['/home']);
    }
  }

  onLogout() : void{
    this.authfire.signOut();
  }
}
/*<div *ngIf="auth.user | async as user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
      <button (click)="logout()">Logout</button>
</div>
<ng-template #showLogin>
  <p>Please login.</p>
  <button (click)="onloginGoogle()">Login with Google</button>
</ng-template>*/