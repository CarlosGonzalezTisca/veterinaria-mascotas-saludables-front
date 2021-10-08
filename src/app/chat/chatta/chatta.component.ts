import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChatitaserviceService} from '../../Service/Chatita/chatitaservice.service';

@Component({
  selector: 'app-chatta',
  templateUrl: './chatta.component.html',
  styleUrls: ['./chatta.component.css']
})
export class ChattaComponent implements OnInit {
  userChat={
    user:"ana",
    text:"",
  }
  myMessages;
  
  eventName = "send-menssage"
  
  constructor(private activated:ActivatedRoute,private Chatservice:ChatitaserviceService) { }

  ngOnInit(): void {
  }
  myMessage(){
    this.Chatservice.emit(this.eventName,this.userChat.text='')
 }

}
