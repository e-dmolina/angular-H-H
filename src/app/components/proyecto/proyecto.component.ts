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
  loading:boolean;

  constructor( private activatedRoute:ActivatedRoute,
               private _proyectosService:ProyectosService) { 

    this.activatedRoute.params.subscribe( params => {

      this.loading = true;

      this.proyecto = this._proyectosService.getProyecto(params['id']);
      this.loading = false;
    });

  }

  ngOnInit() {
  }

  obtenerImagen(idx:number){
    this.imagen = this.proyecto.img[idx];
  }

}


