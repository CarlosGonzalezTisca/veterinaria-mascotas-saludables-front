import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listarjaula',
  templateUrl: './listarjaula.component.html',
  styleUrls: ['./listarjaula.component.css']
})
export class ListarjaulaComponent implements OnInit {
  Jaula;
  Jualas:String[];
  p:number=1;
  mostrarN=true;
  filtroPost;
  n=1;
  numerojaula;
  
  
  constructor(private router:Router,private clienteservice: ClienteService) { }

  ngOnInit(): void {
    this.consultartodo();
    
  }
  ListarJaula(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarjaula"]);
  }
  NuevoJaula(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addjaula"]);
  }
  EditarJaula(){
    this.router.navigate(["editarjaula"]);
  }
  consultartodo(){
    this.Jaula= this.clienteservice.consultartodojaula();
    
  }
  mostrarNo(){
  this.mostrarN = !this.mostrarN;
  }
  consultatpornombre(){
//
  }

  eliminarjaula(numerojaula){

    Swal.fire({
      title: '¿Estas seguro de desactivar Jaula con ID:'+numerojaula+'?',
      text: "¡Se eliminara definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteservice.eliminarjaula(numerojaula).subscribe();
        location.reload();
        Swal.fire(
          'Eliminado!',
          'Jaula desactivada',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Jaula no desactivada',
          'error'
        )
      }
    })  
  }

}
