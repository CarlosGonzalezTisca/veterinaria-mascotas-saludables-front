import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {EmpleadoService} from '../../Service/Empleado/empleado.service';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector:'app-addempleado',
  templateUrl:'./addempleado.component.html',
  styleUrls:['./addempleado.component.css']
})
export class AddempleadoComponent implements OnInit {

  ids;
  Empleado={
    _id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    direccion: "",
    telefono: "",
    correo: "",
    horas:"",
    dias:""
   }
   
  constructor(private router:Router,private empleadoservice: EmpleadoService,private Clientesservice: ClienteService) { }
 
  ngOnInit(): void {
    this.Uid()
  }
  ListarEmpleado(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(['listarempleado']);
  }
  NuevoEmpleado(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(['addempleado']);
  }
 
  addEmpleado(a){
    this.Empleado._id=a;
    this.empleadoservice.insertarempleado(this.Empleado).subscribe(res =>{
     Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Empleado'+this.Empleado.nombre+' Registrado',
        showConfirmButton: false,
        timer: 1500
      })
      
      console.log(res)
      this.ListarEmpleado();
    },
    err => console.log(err,alert("error al guardar, verifique los campos y/o su conexion."))
    
    )
  
  }
  eliminarcliente(_id){
    if(confirm("ESTAS SEGURO DE QUE QUIERES ELIMINAR CLIENTE CON ID:  "+_id+"?")){
      this.empleadoservice.eliminarempleado(_id).subscribe();
      location.reload();
    }
}
Uid(){
  this.ids=this.empleadoservice.ultimoid();
  
 
}
}
