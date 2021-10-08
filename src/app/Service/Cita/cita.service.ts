import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

 
  private Url="https://veterinariamascotas.herokuapp.com/cita"

  private Urlid="https://veterinariamascotas.herokuapp.com/cita/ultimo/id"
 
  private Urleliminar="https://veterinariamascotas.herokuapp.com/cita"



  constructor(private http:HttpClient) { }
 
    
  insertarCita(Cita){
    return this.http.post<any>(this.Url,Cita)
  }
    
  modificarCita(Cita){
    return this.http.put<any>(this.Url,Cita)
  
  }

  consutarCita(Cita){ 
    return this.http.get<any>(this.Url+"/"+Cita.nombre)
  }

  consutartodo(){
    return this.http.get<any>(this.Url)
  }
  ultimoid(){
    return this.http.get<any>(this.Urlid)
  }


  eliminarCita(_id){
    return this.http.delete<any>(this.Urleliminar+"/"+_id,_id)
  
  
  }
}
