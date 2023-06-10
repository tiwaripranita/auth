import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';

import { ForgotPasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent},
 {path:'Signup',component:SignupComponent},

 {path:'forgot',component:ForgotPasswordComponent},
 
 {path:'varify-email',component:VarifyEmailComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
