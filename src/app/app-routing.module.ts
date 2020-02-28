import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './_components/welcome/welcome.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { LoginComponent } from './_components/auth/login/login.component';
import { TrainingComponent } from './_components/training/training.component';
import { Authguard } from './auth.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [Authguard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Authguard]
})
export class AppRoutingModule { }
