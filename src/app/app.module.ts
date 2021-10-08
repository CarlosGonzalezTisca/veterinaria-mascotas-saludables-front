import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{NgxPaginationModule} from 'ngx-pagination';


//importando la clase de rutas
import { APP_ROUTING } from './app.routes'


//COMPONENTES
import { AppComponent } from './app.component';
import { nabvarComponent  } from './nabvar/nabvar.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { nosotros1Component } from './nosotros1/nosotros1.component';
import { serviciosComponent } from  './servicios/servicios.component';

import { Formulario1Component } from './Formularios/formulario1/formulario1.component';
import { Formulario2Component } from './Formularios/formulario2/formulario2.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routes';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditarComponent } from './Cliente/editar/editar.component';

import { AddempleadoComponent } from './Empleado/addempleado/addempleado.component';
import { EditarempleadoComponent } from './Empleado/editarempleado/editarempleado.component';
import { ListarempleadoComponent } from './Empleado/listarempleado/listarempleado.component';
import { AddjaulaComponent } from './Jaula/addjaula/addjaula.component';
import { EditarjaulaComponent } from './Jaula/editarjaula/editarjaula.component';
import { ListarjaulaComponent } from './Jaula/listarjaula/listarjaula.component';
import { AddmascotaComponent } from './Mascota/addmascota/addmascota.component';
import { EditarmascotaComponent } from './Mascota/editarmascota/editarmascota.component';
import { ListarmascotaComponent } from './Mascota/listarmascota/listarmascota.component';
import { AddusuarioComponent } from './Usuario/addusuario/addusuario.component';
import { EditarusuarioComponent } from './Usuario/editarusuario/editarusuario.component';
import { ListarusuarioComponent } from './Usuario/listarusuario/listarusuario.component';
import { agendaComponent } from './agenda/listar/agenda.component';
import { addagendaComponent } from './agenda/addagenda/addagenda.component';

import { HttpClientModule } from '@angular/common/http';


import {ClienteService} from './Service/Cliente/cliente.service'
import {EmpleadoService} from './Service/Empleado/empleado.service';
import {UsuarioService} from './Service/Usuario/usuario.service';
import {CitaService} from './Service/Cita/cita.service';
import {MascotaService} from './Service/Mascota/mascota.service';

import { FiltroPipe } from './Pipes/Filtro/filtro.pipe';
import { ChatComponent } from './chat/Chaty/chat.component';
import { HomeComponent } from './chat/home/home.component';

import { ChattaComponent } from './chat/chatta/chatta.component';
import { UsuarioPipe } from './Pipes/usuariopipe/usuario.pipe';
import { JaulaPipe } from './Pipes/Jaula/jaula.pipe';
import { CitassPipe } from './Pipes/Citass/citass.pipe';


/*
import { nosotrosComponent } from './componentes/nosotros/nosotros.component';
*/
@NgModule({
  declarations: [
    AppComponent,
    nabvarComponent,
    headerComponent,
    footerComponent,
    nosotros1Component,
    serviciosComponent,
    Formulario1Component,
    Formulario2Component,
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
    AddempleadoComponent,
    EditarempleadoComponent,
    ListarempleadoComponent,
    AddjaulaComponent,
    EditarjaulaComponent,
    ListarjaulaComponent,
    AddmascotaComponent,
    EditarmascotaComponent,
    ListarmascotaComponent,
    AddusuarioComponent,
    EditarusuarioComponent,
    ListarusuarioComponent,
    agendaComponent,
    addagendaComponent,
    FiltroPipe,
    ChatComponent,
    HomeComponent,

    ChattaComponent,
    UsuarioPipe,
    JaulaPipe,
    CitassPipe,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    
    
    AppRoutingModule,
    
    NgbModule,
    NgbPaginationModule, 
    
   
    APP_ROUTING,
 
    NgbModule, //IMPORTANDO LA CLASE DE RUTAS 
    NgxPaginationModule
  ],
  providers: [ClienteService,EmpleadoService,UsuarioService,CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
