import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup;


  constructor(private formBuilder : FormBuilder, private auth : AuthService) { }

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      email:[ '', Validators.required ],
      password:[ '', Validators.required ]
    });
  }

  onloginGoogle() {
    this.auth.onLoginGoogle();
  }
  onloginFacebook() {
    this.auth.onLoginFacebook();
  }
}
