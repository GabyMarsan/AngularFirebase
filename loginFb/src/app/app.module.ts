import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAppComponent } from './login-app/login-app.component';

import {MatCardModule } from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginGabyComponent } from './login-gaby/login-gaby.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    LoginGabyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }