import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import {ClienteService} from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  p: number = 1;
 ids;

  Clientes;
  
  a=1;
  Cliente={
    _id:"",
    nombre:"",
    apellido1:"",
    apellido2:"",
    direccion:"",
    telefono:"",
    correo:""

  };

  busquedas;

  total;
  
  wasa;
  
  clientes2;

  mostrarN= false;
  mostrarC= false;
  mostrarcorr= false;

  filtroPost="";
  busquedas2;
  consultarporidf;
  ocultar=true;
  bandera;
  bandera2;
  localemail;
  localnivel;
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  constructor(private router:Router,private clienteservice: ClienteService) { }

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
    this.contarcli();
    this.Uid();
  }
  if(this.bandera2==3){
    this.bandera=!this.bandera;
    console.log("soy 3")
    }
    //this.consultartodoid();
        
  }
 /* document.getElementById('buscarN').style.display="none";*/


 verultimo(){
 
  this.clienteservice.verultimoidcli().subscribe(res =>{

    
    console.log(res)
   
  },
  err => console.log(err,Swal.fire({icon: 'error',
  title: 'Oops...',
  text: 'Algo salio mal, intentelo de nuevo.',}))
  
  )

 }
 buscarmascota(){
  this.ocultar=false;
  this.Clientes= "";
  this.busquedas = this.clienteservice.verultmasc();
  this.consultartodo();
  
  
 }
 limpriarbsq(){
   this.busquedas = ""
   this.ocultar=true;
   
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
  consultarporid(){
  
  
    this.clientes2=this.clienteservice.consultarid(this.busquedas).subscribe(res =>{
      alert("ID Encontrado")
      
      alert(this.clientes2=Object.values(res));
     
    },
    err => console.log(err,alert("Error al guardar, verifique los campos o su conexion."))
    
    )

  }


consultartodo(){
  
  
  this.Clientes=this.clienteservice.consutartodo();
  console.log(this.Clientes)

     
}

Uid(){
  this.ids=this.clienteservice.ultimoid();
  
 
}

eliminarcliente(_id){
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
      this.clienteservice.eliminarcliente(_id).subscribe();
      location.reload();
      this.swalWithBootstrapButtons.fire(
        'Eliminado!',
        'Cliente ha sido eliminado',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      this.swalWithBootstrapButtons.fire(
        'Cancelado',
        'Cliente no eliminado',
        'error'
      )
    }
  })  
}
contarcli(){

  this.total = this.clienteservice.totalcli();
  console.log(this.total);
  
  
}
Editar(_id){
  this.router.navigate(["editar"]);
  
  localStorage.setItem('_id',JSON.stringify(_id));
  

}
consultatpornombre(){
  this.clienteservice.consultarnombrecli(this.busquedas).subscribe(res =>{
      alert("Nombre Encontrado")
      
      console.log(res)
     
    },
    err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
    
    )
}
consultarporcorreo(){

  this.clienteservice.consultarporcorreo(this.busquedas).subscribe(res =>{
    alert("Correo encontrado")
    
    console.log(res)
   
  },
  err => console.log(err,alert("Error al buscar, verifique los campos o su conexion."))
  
  )
}
onkeyup(){
  
  return this.filtroPost.toUpperCase();
}



}
