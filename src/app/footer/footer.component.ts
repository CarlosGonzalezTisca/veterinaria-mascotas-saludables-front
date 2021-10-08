import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/Login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})
export class footerComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
 
  nosotrosR(){
    this.router.navigate(["nosotros1"]);

  }

  serviciosR(){
    this.router.navigate(["servicios"]);

  }
}