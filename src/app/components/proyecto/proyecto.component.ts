import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto:any = {};
  imagen="";
  video="Ld0ZQp2ar2Y";

  constructor( private activatedRoute:ActivatedRoute,
               private _proyectosService:ProyectosService) { 

    this.activatedRoute.params.subscribe( params => {
      this.proyecto = this._proyectosService.getProyecto(params['id']);
    });

  }

  ngOnInit() {
  }

  obtenerImagen(idx:number){
    this.imagen = this.proyecto.img[idx];
  }

}


