import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { msgInf } from '../chat-pannel/msgInf';
import { sender } from '../chat-pannel/sender';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public chatsArr:msgInf[]=[];
 
  constructor(public data:DataService)
  {
    
  }
initiateChat(name:string)
{
  // console.log("init cchat");
  this.data.store(name);
  
}

ngOnInit()
{
  this.chatsArr=this.data.msgArr;
  
}
}