import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from '../app//components/inicio/inicio.component';
import { NosotrosComponent } from '../app//components/nosotros/nosotros.component';
import { ProyectosComponent } from '../app//components/proyectos/proyectos.component';
import { ContactoComponent } from '../app//components/contacto/contacto.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyecto/:id', component: ProyectoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
