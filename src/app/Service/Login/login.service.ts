import { Injectable,Output,EventEmitter } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
private loginUrl="https://veterinariamascotas.herokuapp.com/usuario/login"

@Output() change:EventEmitter<boolean>= new EventEmitter();

@Output() change1:EventEmitter<boolean>= new EventEmitter();


  constructor(private http:HttpClient) { }
  
  iniciodesesion(usuario){
    return this.http.post<any>(this.loginUrl,usuario)


  }

eslogueado(){
 this.change.emit( !!localStorage.getItem('token'))
 return !!localStorage.getItem('token')
}

tipousu(){
  this.change1.emit( !!localStorage.getItem('tipo'))
  return !!localStorage.getItem('token')
 }
 


}
