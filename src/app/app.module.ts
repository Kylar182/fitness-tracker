import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { LoginComponent } from './_components/auth/login/login.component';
import { TrainingComponent } from './_components/training/training.component';
import { CurrenttrainingComponent } from './_components/training/currenttraining/currenttraining.component';
import { PasttrainingsComponent } from './_components/training/pasttrainings/pasttrainings.component';
import { WelcomeComponent } from './_components/welcome/welcome.component';
import { NewtrainingComponent } from './_components/training/newtraining/newtraining.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrenttrainingComponent,
    PasttrainingsComponent,
    WelcomeComponent,
    NewtrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
