import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';

@Injectable()
export class AuthentificationService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  loginWithFacebook(){

  }

  loginWithGoogle(){
    this.angularFireAuth.signInWithPopup(new Auth.GoogleAuthProvider());
  }

}