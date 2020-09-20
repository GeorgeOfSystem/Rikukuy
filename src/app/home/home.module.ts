import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './homeComponent/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }