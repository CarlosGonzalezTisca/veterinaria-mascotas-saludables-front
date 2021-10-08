import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addjaula',
  templateUrl: './addjaula.component.html',
  styleUrls: ['./addjaula.component.css']
})
export class AddjaulaComponent implements OnInit {
  //para agregar Jaula se necesita ID del cliente
  Jaula = {
    _id:"",
    numerojaula: "",
    activa: true,
    idmascota: "",
    hora_jau: ""

  };
  mascotas;
  jaudisp;

  constructor(private router: Router, private clienteservice: ClienteService) { }

  ngOnInit(): void {
  }
  ListarJaula() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarjaula"]);
  }
  NuevoJaula() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module

    this.router.navigate(["addjaula"]);
  }
  Guardar(){
    this.clienteservice.agregarjaula(this.Jaula).subscribe(res =>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Jaula asignada correctamente!',
        showConfirmButton: false,
        timer: 1500
      })
      
      console.log(res)
      this.ListarJaula();
    },
    err => console.log(err,alert("error al guardar, verifique los campos y/o su conexion."))
    
    )

  }
  idmascpress(_id){
    
    this.mascotas = this.clienteservice.getmascID(_id);
  }
  jaudispo(_id){
    
    this.jaudisp = this.clienteservice.comprobarJaula(_id);
    console.log(this.jaudisp);
    if(this.jaudisp.numerojaula===1)
    {
      alert()
    }
  }
 

}
