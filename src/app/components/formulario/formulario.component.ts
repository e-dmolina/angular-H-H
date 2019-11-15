import { Component, OnInit } from '@angular/core';
import { FormulariosService } from 'src/app/services/formularios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forma:FormGroup;

  constructor( private _formulariosService:FormulariosService ) { }

  ngOnInit() {
    this.forma = new FormGroup({

      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'mensaje': new FormControl('', Validators.required)
    });

  }

  guardar(){
    console.log(this.forma)
    console.log(this.forma.value)
    this._formulariosService.enviarMail(this.forma.value)
            .subscribe( data => console.log(data), err => console.log(err));

    this.forma.reset();
  }

}
