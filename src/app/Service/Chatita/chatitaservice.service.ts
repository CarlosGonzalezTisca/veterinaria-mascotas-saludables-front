import { Injectable } from '@angular/core';
import *   as io from 'socket.io-client';
import {Observable, Subscriber} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatitaserviceService {
socket:any;
server ="https://localhost:3000/service"
  constructor() {
    this.socket = io(this.server)

   }
   listen(eventName:string){
     return new Observable((Subscriber)=>{

      this.socket.on(eventName, (data)=>{
        Subscriber.next(data);

      })
     })
   }
   emit(eventName:String,data:any){
     this.socket.emit(eventName,data);
   }
}
