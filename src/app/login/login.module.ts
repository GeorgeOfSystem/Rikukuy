import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './loginComponent/login.component';
import { AuthentificationService } from './authentification.service';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [AuthentificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }