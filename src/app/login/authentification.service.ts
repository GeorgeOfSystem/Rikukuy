import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthentificationService {

   constructor(public auth: AngularFireAuth) {
  }

  onLoginGoogle() : void{
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  onLogoutGoogle() : void{
    this.auth.signOut();
  }
}