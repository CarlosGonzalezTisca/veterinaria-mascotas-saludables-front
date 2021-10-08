
import { Component, OnInit ,HostListener} from '@angular/core';
import {LoginService} from '../../Service/Login/login.service';
import {Router} from '@angular/router'
import {UsuarioService} from '../../Service/Usuario/usuario.service'
import Swal from 'sweetalert2';
import {ClienteService} from '../../Service/Cliente/cliente.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})

export class Formulario1Component implements OnInit {

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  usuario={
    email:"",
    password:""
  }
  usuarios;
  idkey;
  

  constructor(private serviciologin: LoginService, private router:Router,private serviciousuario: UsuarioService, private clienteservice:ClienteService){ }


  ngOnInit(): void {
    
    
    
  }

/*
 
 */


consutaremaill(email){
  this.usuarios=this.serviciousuario.consutaremail(email);
}
  formulariodos(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(['formulariodos']);
  }

  @HostListener('login')
  login(){
    
    this.usuarios=this.serviciologin.iniciodesesion(this.usuario).subscribe(res=>{
      const datos=res.envio.split(",")
      localStorage.setItem('token',datos[0])
      localStorage.setItem('nombre',datos[1])
      localStorage.setItem('tipo',datos[2])
      this.serviciologin.eslogueado()
      this.serviciologin.tipousu()
      this.router.navigate(['/header'])
      this.consutaremaill(this.usuario.email)
      localStorage.setItem('email',this.usuario.email);
    
       
      
  this.Toast.fire({
    icon: 'success',
    title: '¡Bienvenido!<br>'+this.usuario.email
  })
    },
    err =>  console.log(err,Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Correo y constraseña incorrectos, intentelo de nuevo.',
      footer: ''
    }))
   
    )
    console.log(this.usuarios)
  }
  


}
