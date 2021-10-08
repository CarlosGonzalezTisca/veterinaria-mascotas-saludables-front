import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {EmpleadoService} from '../../Service/Empleado/empleado.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editarempleado',
  templateUrl: './editarempleado.component.html',
  styleUrls: ['./editarempleado.component.css']
})
export class EditarempleadoComponent implements OnInit {
   
  Empleados;
 
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
   ids;
  constructor(private router:Router, private empleadoservice: EmpleadoService) { }

  ngOnInit(): void {
    this.llenaremple();
  }
  ListarEmpleado(){
    this.router.navigate(["listarempleado"]);
  }
  Actualizar(){
    
    this.empleadoservice.modificarempleado(this.Empleado).subscribe(res =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Apartado actalizado',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["listarempleado"]);
      
      console.log(res)
    },
    err => console.log(err,alert("Error al Actualizar, verifique los campos o su conexion."))
    
    )
  }

llenaremple(){
this.ids = localStorage.getItem('_id');
this.Empleados = this.empleadoservice.buscarByID(this.ids);

}

}
