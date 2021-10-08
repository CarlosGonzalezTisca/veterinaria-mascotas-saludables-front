import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {CitaService} from '../../Service/Cita/cita.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']

})
export class agendaComponent implements OnInit {
Citas;
filtroPost2="";
p: number = 1;

mostrarN= false;
mostrarC= false;
mostrarcorr= false;
mostrartel=false;
ocultar=true;
localemail;
Empleado;
localnivel;
busquedas;
total;
bandera;
bandera2;
swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})



  constructor(private router:Router,private citaservice: CitaService) { }

  ngOnInit(): void {
    this.consultartodo();
    this.localemail=localStorage.getItem('email');
    this.localnivel=localStorage.getItem('tipo');
    this.bandera2 = localStorage.getItem('tipo');
    
    if(this.localnivel==2){
    this.filtroPost2=this.localemail;
    console.log("soy 2")
    
   
    
  }
  else{
    this.consultartodo();
    
  }
  if(this.bandera2==3){
    this.bandera=!this.bandera;
    console.log("soy 3")
    }
    //this.consultartodoid();
      
  }

  addagendar(){
    this.router.navigate(["addagenda"]);
  }
  
Editar(){
  this.router.navigate(["editar"]);
}

mostrarNo(){
  this.mostrarN = !this.mostrarN;
  this.mostrarC = this.mostrarC=false;
  this.mostrarcorr= false;
  this.mostrartel=false;
}
mostrarco(){
  this.mostrarC = !this.mostrarC;
  this.mostrarN = this.mostrarN= false;
  this.mostrarcorr= false;
  this.mostrartel=false;
}
mostrarcorreo(){
  this.mostrarcorr= !this.mostrarcorr;
  this.mostrarN= false;
  this.mostrarC= false;
  this.mostrartel= false;
}
mostrattel(){
  this.mostrartel = true;
  this.mostrarN= false;
  this.mostrarC= false;
  this.mostrarcorr= false;
  

}



consultartodo(){
  this.Citas=this.citaservice.consutartodo();
}

eliminarcita(_id){

  this.swalWithBootstrapButtons.fire({
    title: '¿Estas seguro de eliminar cita con ID:'+_id+'?',
    text: "¡Se eliminara definitivamente!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar',
    cancelButtonText: 'No, Cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      this.citaservice.eliminarCita(_id).subscribe();
      location.reload();
      this.swalWithBootstrapButtons.fire(
        'Eliminado!',
        'Cita ha sido eliminada',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      this.swalWithBootstrapButtons.fire(
        'Cancelado',
        'Cita no eliminada',
        'error'
      )
    }
  }) 

 
  
  
}
}