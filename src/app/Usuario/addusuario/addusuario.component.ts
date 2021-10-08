import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {UsuarioService} from '../../Service/Usuario/usuario.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
  Usuario={
    _id:"",
    codigo:"",
    tipo:"",
    nombre:"",
    email:"",
    password:"",
  };
  ids;

  constructor(private router:Router,private Usuarioservice: UsuarioService) { }
  
  ngOnInit(): void {
    this.Uid();
  }
  ListarUsuario(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarusuario"]);
  }
  NuevoUsuario(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addusuario"]);
  }

  addUsuario(){

    this.Usuarioservice.insertarusuario(this.Usuario).subscribe(res =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["listarusuario"]);
      
      console.log(res)
    },
    err => console.log(err,alert("Error al guardar, verifique los campos o su conexion."))
    
    )
  


}

Uid(){
     
  this.ids = this.Usuarioservice.ultimoid();
  console.log(this.ids)
  
}
}