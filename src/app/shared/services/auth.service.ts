import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public userLogged;

   constructor(public authfire : AngularFireAuth ) {
  }

  onRegister(email, password) : any {
    return new Promise((resolve, reject) => {
      this.authfire.createUserWithEmailAndPassword(email,password).then(userData => resolve(userData),
      err=>(reject(err)));
    });
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