import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { LoginComponent } from './_components/auth/login/login.component';
import { TrainingComponent } from './_components/training/training.component';
import { CurrenttrainingComponent } from './_components/training/currenttraining/currenttraining.component';
import { PasttrainingsComponent } from './_components/training/pasttrainings/pasttrainings.component';
import { WelcomeComponent } from './_components/welcome/welcome.component';
import { NewtrainingComponent } from './_components/training/newtraining/newtraining.component';
import { HeaderComponent } from './_components/navigation/header/header.component';
import { SidenavListComponent } from './_components/navigation/sidenav-list/sidenav-list.component';

import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { StopTrainingDialog } from './_components/training/currenttraining/stop-training/stop-training.component';
import { AuthService } from './_services/AuthService';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrenttrainingComponent,
    PasttrainingsComponent,
    WelcomeComponent,
    NewtrainingComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingDialog]
})
export class AppModule { }
