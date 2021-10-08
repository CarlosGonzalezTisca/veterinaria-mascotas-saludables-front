import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChatitaserviceService} from '../../Service/Chatita/chatitaservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
userChat={
  user:"ana",
  text:"",
}
myMessages;

eventName = "send-menssage"

  constructor(private activated:ActivatedRoute,private Chatservice:ChatitaserviceService) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user= id;
    
    this.Chatservice.listen('text-event').subscribe((data)=>{
      this.myMessages = data;
    })
  }
  myMessage(){
     this.Chatservice.emit(this.eventName,this.userChat.text='')
  }

}
