import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';
import { ClienteService } from '../../Service/Cliente/cliente.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  Clientes;

  Cliente = {
    _id: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    direccion: "",
    telefono: "",
    correo: "",
    numerojaula: "",
    numerocita: "",
    fecha: "",
    hora: ""
  }
  ids1;
  Clienteedit;
  idid;


  constructor(private router: Router, private clienteservice: ClienteService) { }

  ngOnInit(): void {
    this.llenardatos();
    //this.consultartodo();
    this.Clientes = this.clienteservice.ids1;

  }
  Listar() {
    this.router.navigate(["listar"]);
  }
  consultartodo() {
    this.Clientes = this.clienteservice.consutartodo();
  }

  Actualizar() {


    this.clienteservice.modificarcliente(this.Cliente).subscribe(res => {
      if (res) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(["listar"]);
      }
      console.log(res)
    },
      err => console.log(err, Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal, intentelo de nuevo',
        footer: ''
      }))

    )
  }

  llenardatos() {
    this.idid = localStorage.getItem('_id');
    this.Clienteedit = this.clienteservice.consultarbyid(this.idid);
    console.log(this.Clienteedit)
    this.Cliente._id = this.idid;
  }


}
