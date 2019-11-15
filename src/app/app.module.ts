import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios
import { ProyectosService } from './services/proyectos.service';
import { FormulariosService } from './services/formularios.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ProyectoComponent,
    DomseguroPipe,
    LoadingComponent,
    FormularioComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProyectosService,
    FormulariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
