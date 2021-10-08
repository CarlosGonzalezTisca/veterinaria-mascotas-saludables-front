import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User={
    name:"",
  };
  constructor(private router: Router) { }
  entrar = false
  tipo = false
  nivelusu = "0"

  ngOnInit(): void {
  }


  Listar() {
    //El nombre tiene que ser igual a las rutas establecidas 
    //en app.routing module
    this.router.navigate(["Chatss"]);
  }
}
