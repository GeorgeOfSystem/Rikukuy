import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'auth-form',
  template: `
  <form [formGroup]="userForm">
  <div style="display: flex; flex-direction: column; padding: 20px;">
    <!-- Email -->
    <mat-form-field >
      <mat-label > Email </mat-label>
      <input matInput formControlName="email" type="text">
    </mat-form-field>
    <!-- Email verification -->
    <div *ngIf="userForm.get('email').invalid && (userForm.get('email').touched || userForm.get('email').dirty)" class="alert alert-danger">
      <div *ngIf="userForm.get('email').errors.required">
          Email is required
      </div>
    </div>
    <!-- Password -->
    <mat-form-field >
      <mat-label > Password </mat-label>
      <input matInput formControlName="password" type="password">
    </mat-form-field>
    <!-- Password verification -->
    <div *ngIf="userForm.get('password').invalid && (userForm.get('password').touched || userForm.get('password').dirty)" class="alert alert-danger">
      <div *ngIf="userForm.get('password').errors.required">
        Password is required
      </div>
    </div>
  <button mat-raised-button [ngStyle]="{'background': 'rgb(21, 87, 35)'}" (click)="onRegister()" >
    Register
  </button>
  </div>
  <!-- Email -->
  <button mat-raised-button [ngStyle]="{'background': 'rgb(21, 87, 35)'}" (click)="onLoginEmail()" >
    Email
  </button>
  <!-- facebook button -->
  <button mat-raised-button [ngStyle]="{'background': 'rgb(66, 103, 178)'}" (click)="onloginFacebook()" >
    Facebook
  </button>
  <!-- Google button -->
  <button mat-raised-button [ngStyle]="{'background': 'rgb(219, 68, 55)'}" (click)="onloginGoogle()">
    Google
  </button>
</form>`,
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  userForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private auth : AuthService, private router : Router) { }

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      email:[ '', Validators.required ],
      password:[ '', Validators.required ]
    });
  }

  onRegister() : void {
    console.log('New user', this.userForm.value)
    this.auth.onRegister( this.userForm.value.email,this.userForm.value.password).then(res => {
      console.log('userRes', res);
      this.onLoginEmail();
    }).catch(err => console.log('Error', err));
  }

  onLoginEmail(): void {
    console.log('user', this.userForm.value)
    this.auth.onLoginEmail( this.userForm.value.email,this.userForm.value.password).then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }
  onloginGoogle() {
    this.auth.onLoginGoogle().then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }
  onloginFacebook() {
    this.auth.onLoginFacebook().then(res => {
      console.log('userRes', res);
      this.redirect();
    }).catch(err => console.log('Error', err));
  }

  redirect() : void {
    this.router.navigate(['/home']);
  }

}