
import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';
import { msgInf } from './chat-pannel/msgInf';
import { sender } from './chat-pannel/sender';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public keyNum:number=0;
  public agentS:string="A";
  public msgArr:msgInf[]=[];
  // public chatArr:msgInf[]=[];
  
  constructor() { }
  
  public chatid=-1;
  public curDate=new Date();
  store(name:string)
  {

    console.log("in store fnc of data service");
    let welcomeMsg:string="Welcome to hippo chat";
let curMsg:msgInf={} as msgInf;
let currentSender:sender={} as sender;


curMsg.key=this.keyNum;
curMsg.username=name;
this.curDate=new Date();


currentSender.time=this.curDate;
currentSender.userType=("A");
currentSender.message=welcomeMsg;

curMsg.senderArray=[];
curMsg.senderArray.push(currentSender);
console.log(curMsg);
this.msgArr.push(curMsg);
console.log("Msg Array");
console.log(this.msgArr);
    console.log("exitting store fnc")
this.keyNum++;
  }


}