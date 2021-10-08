import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/Login/login.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']

})
export class nabvarComponent implements OnInit {
  @HostBinding('class.is-open')

  entrar = false
  tipo = false
  nivelusu = "0";
  nombreusu;
  login=false;
  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginservice.change.subscribe(isOpen => {
      this.entrar = isOpen;
      this.nombreusu = localStorage.getItem('nombre');
      console.log(this.nombreusu)

    })

    this.loginservice.change1.subscribe(isOpen => {
      this.tipo = isOpen;
      this.nivelusu = localStorage.getItem("tipo");
    })

    this.llenarEntrada();
  }

  Listar() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listar"]);
  }
  ListarEmpleado() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarempleado"]);
  }
  ListarJaula() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarjaula"]);
  }
  ListarMascota() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarmascota"]);
  }
  ListarUsuario() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["listarusuario"]);
  }
  formularios() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["formulario"]);
  }

  llenarEntrada() {
    this.entrar = this.loginservice.eslogueado();
    this.tipo = this.loginservice.tipousu();
    this.nivelusu = localStorage.getItem('tipo');
  }

  cerrarsesion() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Cerrar Sesión',
      text: "¿Estás seguro que quieres salir de esta sesión?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Sesión cerrada',
          'La sesión se ha cerrado exitosamente',
          'success'
        )
        localStorage.removeItem('token');
        localStorage.removeItem('nombre');
        localStorage.removeItem('tipo');
        localStorage.removeItem('nombre');
        localStorage.removeItem('email');
        this.llenarEntrada();
        this.router.navigate(["header"]);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Sesión no Cerrada ',
          'Estamos a su disposición',
          'error'
        )
        
   
      }
    })
     
 


  }


}