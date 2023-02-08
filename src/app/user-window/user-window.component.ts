import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { msgInf } from '../chat-pannel/msgInf';
@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent {
  public chatsArr:msgInf[]=[];
constructor(public chats:DataService)
{

}
ngOnInit()
{
  this.chatsArr=this.chats.msgArr;
}
selectUser(key:number)
{
  this.chats.chatid=key;
  console.log(this.chats.chatid);
}
}