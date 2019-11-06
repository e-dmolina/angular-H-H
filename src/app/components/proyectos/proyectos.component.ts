import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService,
               private ruter:Router ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
  }

  verProyecto(idx:number){
    this.ruter.navigate( ['/proyecto', idx] );
  }

}
