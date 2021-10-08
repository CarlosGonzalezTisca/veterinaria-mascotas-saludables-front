import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import {Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  ids;
  Clientes;

  Cliente={
    _id:"",
    nombre: "",
    apellido1: "",
    apellido2: "",
    direccion: "",
    telefono: "",
    correo: "",
    numerojaula:"",
    numerocita:"1",
    fecha:"",
    hora:"",
    }
    idtotal= 0;
    idcliente;
    micorreo1;
    minombre1;
    localemail;
   
    localnivel;
    
    constructor(private router:Router,private clienteservice: ClienteService) { }
 
  ngOnInit(): void {
    
  
    this.Uid(); 
    localStorage.getItem('_id')
    localStorage.getItem('email')
    this.minombre1 = localStorage.getItem('nombre')
    this.micorreo1 = localStorage.getItem('email')
  
  }

aaaaaaaa(a){

}
  Listar(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["add"]);
  }

  addCliente(a){

    this.Cliente._id=a;
    this.Cliente.correo = this.micorreo1;
    this.Cliente.nombre = this.minombre1;
    this.clienteservice.insertarcliente(this.Cliente).subscribe(res =>{
      
      
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Cliente guardado correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["listar"]);
      console.log(res)
    
   
 
    },
    err => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Verifica tus campos o tu conexion a internet,',
      footer: ''
    })
    
    )
    
  }

  Uid(){
     
    this.ids = this.clienteservice.ultimoid();
    console.log(this.ids)
    
  }
  consultartodo(){

    this.Clientes = this.clienteservice.consultarbyid

  }
 
 
}
