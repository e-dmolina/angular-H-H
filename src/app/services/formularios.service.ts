import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor( private hhtp:HttpClient ) { }

  enviarMail(formulario){
    
    return this.hhtp.post('http://localhost:3000/email',formulario);
    
  }
}
