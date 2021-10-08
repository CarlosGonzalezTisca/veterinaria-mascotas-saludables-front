import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }
  private Url = "https://veterinariamascotas.herokuapp.com/mascota/"

  private Urlid = "https://veterinariamascotas.herokuapp.com/mascota/id"

  private UrInsert = "https://veterinariamascotas.herokuapp.com/mascota/insertar"

  private Urlborrar = "https://veterinariamascotas.herokuapp.com/mascota/borrar"

  ultimoid() {
    return this.http.get<any>(this.Urlid)
  }

  consutartodo() {
    return this.http.get<any>(this.Url)
  }

  insertarmascota(Mascota) {
    return this.http.post<any>(this.UrInsert, Mascota)
  }
  deletmasc(_id) {
    return this.http.delete<any>(this.Urlborrar+"/"+_id,_id)
  
  }
}
