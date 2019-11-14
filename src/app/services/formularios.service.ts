import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor( private hhtp:HttpClient ) { }

  enviarMail(formulario){
    
    return this.hhtp.post('http://18.229.159.69:3000/email',formulario);
    
  }
}
