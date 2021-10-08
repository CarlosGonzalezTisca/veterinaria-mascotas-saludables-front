import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MascotaService} from '../../Service/Mascota/mascota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addmascota',
  templateUrl: './addmascota.component.html',
  styleUrls: ['./addmascota.component.css']
})
export class AddmascotaComponent implements OnInit {
  Mascota;
  Mascota1={
_id:"",
nombre_masc:"",
raza:"",
tamano:"",
peso:"",
dueno:"",
correo:"",

 
  };
  ids;
  dueno1;
  correo1;
  micorreo1;
  constructor(private router:Router,private mascotaService: MascotaService) { 
    
  }

  ngOnInit(): void {
    this.Uid()
    this.dueno();
    this.micorreo1 = localStorage.getItem('email')
    
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
  addMascota(a){

    this.Mascota1._id=a;
    this.Mascota1.correo=this.correo1;
    this.Mascota1.dueno=this.dueno1;
    this.mascotaService.insertarmascota(this.Mascota1).subscribe(res =>{
      console.log(this.Mascota1)
      
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Mascota guardada correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["listarmascota"]);
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
     
    this.ids = this.mascotaService.ultimoid();
    console.log(this.ids)
    
  }
  dueno(){
    this.dueno1=String( localStorage.getItem('nombre'));
    this.correo1=String(localStorage.getItem('email'));
    //console.log(this.Mascota1.dueno)
    console.log(this.Mascota1.correo)
  }

}
