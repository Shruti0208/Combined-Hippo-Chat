import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routingComponent } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginObj: any={
    email: ''
  };
   
  constructor(public route:Router)
  {

  }
  ngOnInit():void{

   
  }
  onLogin(value:any)
  {
    console.log(value);
   let  localData=JSON.parse(localStorage.getItem('signupUser')as string);
   let flag=false;
  //  let emailId=signupUser.email;
  console.log('local',localData[0].email);
   for(let element in localData)
    { console.warn(localData[element].email,'==',value)
      if(localData[element].email==value.email)
      {
        flag=true;
         this.route.navigate(['/dashboard']);
      }
    }
  if(flag==false)
  {
    alert("email doesnot exist");
  }
  }
}
