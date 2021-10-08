import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private Url = "https://veterinariamascotas.herokuapp.com/empleado"

  private Urlid = "https://veterinariamascotas.herokuapp.com/empleado/id"

  private Urleliminar = "https://veterinariamascotas.herokuapp.com/empleado/borrar"

  private buscarporid = "https://veterinariamascotas.herokuapp.com/empleado/buscar1"

  private buscarpornombre = "https://veterinariamascotas.herokuapp.com/empleado/nombre"

  private buscarportelefono = "https://veterinariamascotas.herokuapp.com/empleado/tel"

  private buscarporcorreo = "https://veterinariamascotas.herokuapp.com/empleado/correo"

  private verturnomatutino = "https://veterinariamascotas.herokuapp.com/empleado/turnoM"

  private verturnovespertino = "https://veterinariamascotas.herokuapp.com/empleado/turnoV"

  




  constructor(private http: HttpClient) { }
  id() {
    return this.http.get<any>(this.Urlid)
  }

  insertarempleado(empleado) {
    return this.http.post<any>(this.Url,empleado)
  }

  modificarempleado(empleado) {
    return this.http.put<any>(this.Url, empleado)

  }

  consutarempleado(empleado) {

    return this.http.get<any>(this.Url + "/" + empleado.nombre)


  }

  consutartodo() {
    return this.http.get<any>(this.Url)
  }


  eliminarempleado(_id) {

    return this.http.delete<any>(this.Urleliminar + "/" + _id, _id)


  }
  buscarByID(_id) {
    return this.http.get<any>(this.buscarporid + "/" + _id, _id)
  }
  buscarByNombre(nombre) {
    return this.http.get<any>(this.buscarpornombre + "/" + nombre, nombre)
  }

  buscarByTel(tel){
    return this.http.get<any>(this.buscarportelefono + "/" + tel, tel)
  }
  buscarByCorreo(correo){
    return this.http.get<any>(this.buscarporcorreo+"/"+correo,correo)
  }
  verturnoMatutino(){
    return this.http.get<any>(this.verturnomatutino)
  }
  verturnoVespertino(){
    return this.http.get<any>(this.verturnovespertino)
  }
  ultimoid(){
    return this.http.get<any>(this.Urlid)
  }

}
