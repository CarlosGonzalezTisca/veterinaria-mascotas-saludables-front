import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {UsuarioService} from '../../Service/Usuario/usuario.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {
usuarios;
filtroPost="";
p: number = 0;
mostrarN= false;
mostrarC= false;
mostrarcorr= false;
  constructor(private router:Router,private usuarioservice: UsuarioService) { }

  ngOnInit(): void {
    this.consultartodo()
  }
  EditarUsuario(){
    this.router.navigate(["editarusuario"]);
  }
  mostrarNo(){

    this.mostrarN = !this.mostrarN;
    this.mostrarC = this.mostrarC=false;
    this.mostrarcorr= false;
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
  consultartodo(){
    this.usuarios=this.usuarioservice.consutartodo();
  }
  eliminarcliente(_id){
    Swal.fire({
      title: '¿Estas seguro de eliminar Usuario con ID:'+_id+'?',
      text: "¡Se eliminara definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioservice.eliminarUsuario(_id).subscribe();
        
        Swal.fire(
          'Eliminado!',
          'El Usuario ha sido eliminado',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Usuario no eliminado',
          'error'
        )
      }
      location.reload(); 
    })  
    }
     
}
