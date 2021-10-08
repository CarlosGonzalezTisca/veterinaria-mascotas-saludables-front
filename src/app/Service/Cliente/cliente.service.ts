import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private Url="https://veterinariamascotas.herokuapp.com/cliente"

  private Urlid="https://veterinariamascotas.herokuapp.com/cliente/id"

  private Urlbc="https://veterinariamascotas.herokuapp.com/cliente/borrar"

  private Urleliminar="https://veterinariamascotas.herokuapp.com/cliente"

  private Urltotalcli ="https://veterinariamascotas.herokuapp.com/cliente/totalcli"

  private Urlclibyid ="https://veterinariamascotas.herokuapp.com/cliente/uno"

  private consultarporid="https://veterinariamascotas.herokuapp.com/cliente/uno"

  private consultarnombre="https://veterinariamascotas.herokuapp.com/cliente/nombre"

  private consultarporcorreocli="https://veterinariamascotas.herokuapp.com/cliente/buscarcorreo"

  private verultimoid="https://veterinariamascotas.herokuapp.com/cliente/id"

  private quientienemasc="https://veterinariamascotas.herokuapp.com/cliente/climasc"
  //rutas para agregar Jaulas
  private addJuala ="https://veterinariamascotas.herokuapp.com/cliente/jaula"

  private getJaulas ="https://veterinariamascotas.herokuapp.com/cliente/getjaulas"

  private getmascotaByid ="https://veterinariamascotas.herokuapp.com/cliente/listmasc"

  private comprobarjau ="https://veterinariamascotas.herokuapp.com/cliente/jauladip"

  private deletejaula ="https://veterinariamascotas.herokuapp.com/cliente/eliminarjaula"

  private obteneridkey="https://veterinariamascotas.herokuapp.com/cliente/obtenerid";

  //rutas para agregar Mascotas


  constructor(private http:HttpClient) { }

 ids1;


 consultarid(_id){
  return this.http.get<any>(this.consultarporid+"/"+_id,_id)
 }
    
  insertarcliente(cliente){
    return this.http.post<any>(this.Url,cliente)
  }
    
  modificarcliente(cliente){
    return this.http.put<any>(this.Url,cliente)
  
  }

  consutarcliente(cliente){ 
  
    return this.http.get<any>(this.Url+"/"+cliente.nombre)
  
  
  }

  consutartodo(){
    return this.http.get<any>(this.Url)
  }
  ultimoid(){
    return this.http.get<any>(this.Urlid)
  }

  consultarbyid(_id){
    
    return this.http.get<any>(this.Urlclibyid+"/"+_id,_id)
    
  }

  eliminarcliente(_id){

    return this.http.delete<any>(this.Urleliminar+"/"+_id,_id)
  
  
  }
  totalcli(){
    
    return this.http.get<any>(this.Urltotalcli)
  }
  consultarnombrecli(nombre){
    return this.http.get<any>(this.consultarnombre+"/"+nombre,nombre)
  }
  consultarporcorreo(correo){
    return this.http.get<any>(this.consultarporcorreocli+"/"+correo,correo)
  }
  verultimoidcli(){
    return this.http.get<any>(this.verultimoid)
  }

  verultmasc(){
    return this.http.get<any>(this.quientienemasc)
  }
  //TODO:JAULAS
  agregarjaula(Jaula){
    return this.http.put<any>(this.addJuala+"/"+Jaula._id,Jaula)
  }
  consultartodojaula(){
    return this.http.get<any>(this.getJaulas)
  }
  getmascID(_id){
    return this.http.get<any>(this.getmascotaByid+"/"+_id)
  }
 comprobarJaula(_id){
   return this.http.get<any>(this.comprobarjau+"/"+_id)
 }
 eliminarjaula(Jaula){
   return this.http.put<any>(this.deletejaula+"/"+Jaula[0].numerojaula,Jaula[0].numerojaula)
   
 }
 soloid(correo)
 {
  return this.http.get<any>(this.obteneridkey+"/"+correo)
 }
}
