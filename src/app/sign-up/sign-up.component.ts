import { Component } from '@angular/core';
import { routingComponent } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupUser: any[]=[];
  signupObj: any={
    email: ''
  };
  
 
constructor(public route:Router)
{

}
userlogin(value:any)
{
  console.log(value);
   let  localData=JSON.parse(localStorage.getItem('signupUser')as string);
   let flag=true;
  //  let emailId=signupUser.email;
  console.log('local',localData[0].email);
  
  for(let element in localData)
    { 
      // console.warn(localData[element].email,'==',value)
      if(localData[element].email==value.email)
      {
        flag=false;
      }
    }
    console.log(flag);
  if(flag==false)
  {
    alert("email already exist");
  }
  if(flag==true)
  {
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
  this.signupObj={
    email:''
  };
  this.route.navigate(['/dashboard']);
  }

}

}
