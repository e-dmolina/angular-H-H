import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor( private hhtp:HttpClient ) { }

  enviarMail(formulario){
    
    return this.hhtp.post('https://fathomless-escarpment-25780.herokuapp.com/email',formulario);

  }
}
