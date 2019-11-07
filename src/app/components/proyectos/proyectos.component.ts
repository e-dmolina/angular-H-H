import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];
  loading:boolean;

  constructor( private _proyectosService:ProyectosService,
               private ruter:Router ) {

    this.loading = true;
  }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
    this.loading = false;
  }

  verProyecto(idx:number){
    this.ruter.navigate( ['/proyecto', idx] );
  }

}
