import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

   constructor(public authfire : AngularFireAuth ) {
  }

  onLoginEmail(email : string, password : string) : any {
    return new Promise((resolve, reject) => {
      this.authfire.signInWithEmailAndPassword(email,password).then(userData => resolve(userData),
      err=>(reject(err)));
    });
  }

  onLoginGoogle() : any {
    return this.authfire.signInWithPopup(new auth.GoogleAuthProvider());
  }

  onLoginFacebook() : any {
    return this.authfire.signInWithPopup(new auth.FacebookAuthProvider());
  }

  isAuth() : any {
    return this.authfire.authState.pipe(map(auth => auth))
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