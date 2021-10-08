import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MascotaService} from '../../Service/Mascota/mascota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarmascota',
  templateUrl: './listarmascota.component.html',
  styleUrls: ['./listarmascota.component.css']
})
export class ListarmascotaComponent implements OnInit {
  Mascota;
  Mascota1={
_id:"",
nombre_masc:"",
raza:"",
estatura:"",
peso:"",
dueno:"",
correo:"",

  };
  localemail;
  localnivel;
  p:1;
  filtroPost="";
  
  mostrarN= false;
  mostrarC= false;
  mostrarcorr= false;
  bandera;
  bandera2;
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  constructor(private router:Router,private mascotaService: MascotaService) { }

  ngOnInit(): void {
    
    this.consultartodo();
    this.localemail=localStorage.getItem('email');
    this.localnivel=localStorage.getItem('tipo');
    this.bandera2 = localStorage.getItem('tipo');
    
    if(this.localnivel==2){
    this.filtroPost=this.localemail;
    console.log("soy 2")
    
   
    
  }
  else{
    this.consultartodo();
  }
  if(this.bandera2==3){
    this.bandera=!this.bandera;
    console.log("soy 3")
    }
  }
  ListarMascota(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarmascota"]);
  }
  NuevoMascota(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addmascota"]);
  }
  EditarMascota(){
    this.router.navigate(["editarmascota"]);
  }

  consultartodo(){
    this.Mascota=this.mascotaService.consutartodo();
  }
 
  mostrarcorreo(){
    this.mostrarcorr= !this.mostrarcorr;
    this.mostrarN= false;
    this.mostrarC= false;
  
   }
  
    mostrarco(){
      this.mostrarC = !this.mostrarC;
      this.mostrarN = this.mostrarN= false;
      this.mostrarcorr= false;
    }
   mostrarNo(){
  
     this.mostrarN = !this.mostrarN;
     this.mostrarC = this.mostrarC=false;
     this.mostrarcorr= false;
   }
   eliminarmascota(_id){
    {
      this.swalWithBootstrapButtons.fire({
        title: '¿Estas seguro de eliminar mascota con ID:'+_id+'?',
        text: "¡Se eliminara definitivamente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, Eliminar',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.mascotaService.deletmasc(_id).subscribe();
          location.reload();
          this.swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Mascota ha sido eliminado',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          this.swalWithBootstrapButtons.fire(
            'Cancelado',
            'Mascota no eliminada',
            'error'
          )
        }
      })  
    }

   }
}
