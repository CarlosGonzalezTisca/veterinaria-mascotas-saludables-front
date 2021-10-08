import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {EmpleadoService} from '../../Service/Empleado/empleado.service';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarempleado',
  templateUrl: './listarempleado.component.html',
  styleUrls: ['./listarempleado.component.css']
})
export class ListarempleadoComponent implements OnInit {
  ids;
  filtroPost="";
p: number = 1;
mostrarN= false;
mostrarC= false;
mostrarcorr= false;
Empleado;

busquedas;
mostrartel=false;
empleados2;
total;
ocultar=true;
swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
  constructor(private router:Router,private empleadoservice: EmpleadoService,private Clienteservice:ClienteService) { }
 
  ngOnInit(): void {
    this.consultartodo();
  }
  ListarEmpleadoUno(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarempleado"]);
  }
  NuevoEmpleadoUno(){
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["addempleado"]);
  }
  EditarEmpleado(_id){
    localStorage.setItem('_id',JSON.stringify(_id))
    this.router.navigate(["editarempleado"]);
  }
  consultartodo(){
    this.Empleado=this.empleadoservice.consutartodo();
  }
  eliminarempleado(_id){
    
     
    

    this.swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar cliente con ID:'+_id+'?',
      text: "¡Se eliminara definitivamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.empleadoservice.eliminarempleado(_id).subscribe();
        location.reload();
        this.swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Empleado ha sido eliminado',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelado',
          'Empleado no eliminado',
          'error'
        )
      }
    }) 


    
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

consultatpornombre(){
  this.empleadoservice.buscarByNombre(this.busquedas).subscribe(res =>{
    alert("Empleado Encontrado")
    
    console.log(res)
   
  },
  err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
  
  )

}
consultarporid(){
  this.empleados2=this.empleadoservice.buscarByID(this.busquedas).subscribe(res =>{
    alert("Empleado Encontrado")
    
    console.log(res)
   
  },
  err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
  
  )

}
consultarporcorreo(){
  
  this.empleadoservice.buscarByCorreo(this.busquedas).subscribe(res =>{
    alert("Empleado Encontrado")
    
    console.log(res)
   
  },
  err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
  
  )

}
consultarportelefono(){
  this.empleadoservice.buscarByTel(this.busquedas).subscribe(res =>{
    alert("Empleado Encontrado")
    
    console.log(res)
   
  },
  err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
  
  )

}
vermatutinos(){

  this.busquedas = this.empleadoservice.verturnoMatutino();
  this.ocultar = false;


}
vervespertinos(){

  this.busquedas = this.empleadoservice.verturnoVespertino();
  this.ocultar = false;

}
Listar(){

}
Nuevo(){

}

Uid(){
  this.ids=this.empleadoservice.ultimoid();
  
 
}
limpriarbsq(){
  this.busquedas = "";
  this.ocultar = true;
  this.consultartodo();
}
}
