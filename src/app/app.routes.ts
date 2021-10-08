import { RouterModule, Routes } from '@angular/router';

import { Formulario1Component } from './Formularios/formulario1/formulario1.component';
import { Formulario2Component } from './Formularios/formulario2/formulario2.component';
import { headerComponent } from './header/header.component';
import { nosotros1Component } from './nosotros1/nosotros1.component';
import { serviciosComponent } from  './servicios/servicios.component';


import { NgModule } from '@angular/core';

import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditarComponent } from './Cliente/editar/editar.component';


import { ListarempleadoComponent } from './Empleado/listarempleado/listarempleado.component';
import { AddempleadoComponent } from './Empleado/addempleado/addempleado.component';
import { EditarempleadoComponent } from './Empleado/editarempleado/editarempleado.component';
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
import { ChatComponent } from './chat/Chaty/chat.component';
import { HomeComponent } from './chat/home/home.component';

import { ChattaComponent } from './chat/chatta/chatta.component';

const routes: Routes =[

    { path: 'formulario', component: Formulario1Component },
    { path: 'formulariodos', component: Formulario2Component },
    { path: 'header', component: headerComponent },
    { path: 'nosotros1', component: nosotros1Component },
    { path: 'servicios' , component: serviciosComponent },
    
    

{path:'listar',component:ListarComponent},
{path:'add',component:AddComponent},
{path:'editar',component:EditarComponent},

 
{path:'listarempleado',component:ListarempleadoComponent},
{path:'listarjaula',component:ListarjaulaComponent},
{path:'addempleado',component:AddempleadoComponent},
{path:'editarempleado',component:EditarempleadoComponent},
{path:'addjaula',component:AddjaulaComponent},
{path:'editarjaula',component:EditarjaulaComponent},
{path:'listarmascota',component:ListarmascotaComponent},
{path:'addmascota',component:AddmascotaComponent},
{path:'editarmascota',component:EditarmascotaComponent},
{path:'listarusuario',component:ListarusuarioComponent},
{path:'addusuario',component:AddusuarioComponent},
{path:'editarusuario',component:EditarusuarioComponent},
{path:'agendalistar',component:agendaComponent},
{path:'addagenda',component:addagendaComponent},
{path:'Chatss',component:ChatComponent},
{path:'Homes',component:HomeComponent},
{path:'C',component:ChattaComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'header'},
];/*Esto es un arreglo de rutas */

export const APP_ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
