import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 
  private Url="https://veterinariamascotas.herokuapp.com/usuario/"

  private Urlid="https://veterinariamascotas.herokuapp.com/usuario/id"

  private UrlEliminar="https://veterinariamascotas.herokuapp.com/usuario/borrar"
  
  private UrlEmail="https://veterinariamascotas.herokuapp.com/usuario/buscarcorreo"


  constructor(private http:HttpClient) { }
  
    
  insertarusuario(Usuario){
    return this.http.post<any>(this.Url,Usuario)
  }
    
  modificarusuario(usuario){
    return this.http.put<any>(this.Url,usuario)
  
  }
  
  consutarusuario(usuario){ 
  
    return this.http.get<any>(this.Url+"/"+usuario.nombre)
  
  
  }

  consutaremail(email){
    return this.http.get<any>(this.UrlEmail+"/"+email,email)
  }
  consutartodo(){
    return this.http.get<any>(this.Url)
  }

  ultimoid(){
    return this.http.get<any>(this.Urlid)
  }
  eliminarUsuario(_id){

    return this.http.delete<any>(this.UrlEliminar+"/"+_id,_id)
  
  
  }
}
