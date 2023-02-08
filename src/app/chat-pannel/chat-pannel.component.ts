import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { msgInf } from './msgInf';
import { sender } from './sender';
@Component({
  selector: 'app-chat-pannel',
  templateUrl: './chat-pannel.component.html',
  styleUrls: ['./chat-pannel.component.css']
})
export class ChatPannelComponent implements OnInit{
  public messageArr:sender[]=[];
   temp:number=-1;
  //  customerMsg:string[]=[];
   userMsg:string[]=[];
   public currentChat:sender[]=[]; 
   initialTime:Date=new Date();
   constructor(public chatService:DataService)
{

}
ngOnInit() {

  this.currentChat=this.chatService.msgArr[this.chatService.chatid].senderArray;
   console.log('logging current chat',this.currentChat);
}
userChat(message:string)
{
 let comp:sender={} as sender 
 comp.userType="user";

   comp.message=message;
   this.temp=0;
this.userMsg.push(message);

this.messageArr.push(comp);
console.log(this.messageArr);

this.chatService.msgArr[this.chatService.chatid].senderArray.push(comp);

  console.log(this.chatService.msgArr[this.chatService.chatid].senderArray);
  
  comp.time=new Date();

}

customerChat(message:string)
{
  let comp:sender={} as sender 
  comp.userType="customer";
  comp.message=message;
  this.temp=1;
  this.userMsg.push(message);
  // console.log(comp);
  this.chatService.msgArr[this.chatService.chatid].senderArray.push(comp);
this.messageArr.push(comp);
console.log(this.messageArr);
// console.log('logging current chat',this.currentChat);
comp.time=new Date();
}
}