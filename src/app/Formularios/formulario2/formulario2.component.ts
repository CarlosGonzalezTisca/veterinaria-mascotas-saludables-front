import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {UsuarioService} from '../../Service/Usuario/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  Usuario={
    _id:"",
    codigo:"",
    tipo:"2",
    nombre:"",
    email:"",
    password:"",
  };
  ids
  constructor(private router:Router,private Usuarioservice: UsuarioService) { }

  ngOnInit(): void {
    this.Uid();
    
  }

  addUsuario(a){

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuario: '+'&nbsp;'+this.Usuario.email+' registrado',
      showConfirmButton: false,
      timer: 1500
    })
    this.Usuario._id=a;
    this.Usuario.codigo=a;
    
    this.Usuarioservice.insertarusuario(this.Usuario).subscribe(res =>{
      this.router.navigate(["header"]);
     
      console.log(res)
      
    },
    err => console.log(err,Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Verifica tus campos o tu conexion a internet,',
      footer: ''
    }))
    
    )
  


}
Uid(){
     
  this.ids = this.Usuarioservice.ultimoid();
  console.log(this.ids)
  
}
}
