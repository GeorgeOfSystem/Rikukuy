import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';




@Component({
  selector: 'login',
  template: `<!--Main Navigation-->
<header class="intro-header">
  <!-- Intro Section -->
  <div class="view jarallax" data-jarallax='{"speed": 0.2}'>
    <div class="full-bg-img mask rgba-black-light">
      <div class="container flex-center">
        <div class="row pt-5 mt-3 w-100">
          <div class="col-md-12">
            <div class="text-center">
              <h2 class="h1 h1-reponsive white-text font-up font-bold mb-3 wow fadeInDown" data-wow-delay="0.3s">
                <strong> Nicole & George Website</strong>
              </h2>
              <hr class="hr-light mt-4 wow fadeInDown" data-wow-delay="0.4s">
                <h5 class="font-up mb-5 white-text wow fadeInDown" data-wow-delay="0.4s">
                  <strong>Photography & design</strong>
                </h5>
              <div class="example-sidenav-content">
                <mat-drawer #drawer style="width: 300px; height: 100%;" mode="side" [position]="'end'">
                  <auth-form></auth-form>
                </mat-drawer>
              </div>
              <a mdbBtn color="white" outline="true" class="wow fadeInDown waves-light" data-wow-delay="0.4s" mdbWavesEffect (click)="drawer.toggle()"> Login </a>
              <a mdbBtn color="white" outline="true" class="wow fadeInDown waves-light" data-wow-delay="0.4s" mdbWavesEffect>About me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() : void {
  }
}
