import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

   constructor(public authfire : AngularFireAuth, private router : Router ) {
  }

  onLoginGoogle() : void{
    this.authfire.signInWithPopup(new auth.GoogleAuthProvider());
    this.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged');
        this.router.navigate(['/home']);
      }else{
        console.log('Not user logged');
      }
    });
  }

  onLoginFacebook() : void{
    this.authfire.signInWithPopup(new auth.FacebookAuthProvider());
    this.isAuth().subscribe( auth => {
      if(auth){
        console.log('user logged');
        this.router.navigate(['/home']);
      }else{
        console.log('Not user logged');
      }
    });
  }

  onLogout() : void{
    this.authfire.signOut();
  }

  isAuth() : any {
    return this.authfire.authState.pipe(map(auth => auth))
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