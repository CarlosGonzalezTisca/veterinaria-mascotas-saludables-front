import { Component, OnInit } from '@angular/core';
import {CitaService} from '../../Service/Cita/cita.service';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addagenda',
  templateUrl: './addagenda.component.html',
  styleUrls: ['./addagenda.component.css']


})
export class addagendaComponent implements OnInit {
activador=false;
activador2=false;
activador3=false;
activador4=false;
activador5=false;
activador6=false;
activador7=false;
 totals= 0;
 ids;
 Cita={
  _id:0,
  correo:"",
  activa: "true",
  numerocita: "",
  fecha: "",
  tamano:"",
  peso:"",
  hora:"",
  descripcion:"",
  _idmasc:"",
  raza: "",
  nombremasc:"",
  nombreserv:"",
  costo:0,
  descuento:0,
  total:0,
  };
  micorreo1;
    constructor(private router:Router,private citaservice: CitaService) { }
  
    ngOnInit(): void {
      this.Uid();
      this.micorreo1=localStorage.getItem('email');
   
    }



    Uid(){
      this.ids=this.citaservice.ultimoid();
      
     
    }

  banototal(activador){
    if(activador==true){
      this.totals=this.totals-100;
     
    }
    if(activador==false){
      this.totals=this.totals+100;
      this.Cita.nombreserv=this.Cita.nombreserv+"Baño";
    }
    
  }
  desparacitacion(activador2){
    
    if(activador2==true){
      this.totals=this.totals-150;
    }
    if(activador2==false){
      this.totals=this.totals+150;
      this.Cita.nombreserv=this.Cita.nombreserv+" Desparacitacion ";
    }
  }
  Castracion(activador3){
    
    if(activador3==true){
      this.totals=this.totals-1200;
    }
    if(activador3==false){
      this.totals=this.totals+1200;
      this.Cita.nombreserv=this.Cita.nombreserv+" Castración ";
    }
  }
  Cirugia(activador4){
    
    if(activador4==true){
      this.totals=this.totals-700;
    }
    if(activador4==false){
      this.totals=this.totals+700;
      this.Cita.nombreserv=this.Cita.nombreserv+" Cirugía ";
    }
  }
  Traumatologia(activador5){
    
    if(activador5==true){
      this.totals=this.totals-800;
    }
    if(activador5==false){
      this.totals=this.totals+800;
      this.Cita.nombreserv=this.Cita.nombreserv+" Traumatología ";
    }
  }
 
  Odontologia(activador6){
    if(activador6==true){
      this.totals=this.totals-900;
    }
    if(activador6==false){
      this.totals=this.totals+900;
      this.Cita.nombreserv=this.Cita.nombreserv+" Odontología ";
    }
  }
  Ecografias(activador7){
    if(activador7==true){
      this.totals=this.totals-500;
    }
    if(activador7==false){
      this.totals=this.totals+500;
      this.Cita.nombreserv=this.Cita.nombreserv+" Ecografías ";
    }
  }

  Guardar(a){

    this.Cita._id=a;
    this.Cita.total=this.totals;
    this.Cita.correo=this.micorreo1;
    this.citaservice.insertarCita(this.Cita).subscribe(res =>{
     
      console.log(this.Cita)
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Cita guardada correctamente.',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["agendalistar"]);
    
   
 
    },
    err => console.log(err,alert("Error al guardar, verifique los campos o su conexion."),this.Cita)
    
    
    )
    
  }
 
 
  }

