import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PasswordComponent } from './password/password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
   {
    path: 'login',
    component:LogInComponent
  },
  {
    path: 'password',
    component:PasswordComponent
  }, {
    path: '',
    component:SignUpComponent
  },
  {
    path:'dashboard',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LogInComponent,PasswordComponent,SignUpComponent,ParentComponent]