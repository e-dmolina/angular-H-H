import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormulariosService } from 'src/app/services/formularios.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cliente = {
    nombre:"",
    email:"",
    mensaje:""
  }

  constructor( private _formulariosService:FormulariosService ) { }

  ngOnInit() {
  }

  enviar(f:NgForm){
    
    this._formulariosService.enviarMail(f.value)
            .subscribe( data => console.log(data), err => console.log(err));
  }

}
