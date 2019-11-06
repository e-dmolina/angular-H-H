import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

    private proyectos:Proyecto[] = [
        {
            nombre:"Vivienda Flia León",
            img:["https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/49-Leon/Leon_02-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/49-Leon/Leon_01-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/49-Leon/Leon_05-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/49-Leon/Leon_03-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/49-Leon/Leon_04-min.jpg"],
            categoria:"Familiar",
            info:"This card has supporting text below as a natural lead-in to additional content."
        },
        {
            nombre:"Vivienda Flia López",
            img:["https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/48-Flia.%20Lopez%20y%20Nuin/Lopez_01-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/48-Flia.%20Lopez%20y%20Nuin/Lopez_02-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/48-Flia.%20Lopez%20y%20Nuin/Lopez_05-min.jpg"],
            categoria:"Familiar",
            info:"This card has supporting text below as a natural lead-in to additional content."
        },
        {
            nombre:"Vivienda Flia Goy",
            img:["https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_01-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_02-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_06-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_03-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_05-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/46-Flia.%20Goy/Goy_04-min.jpg"],
            categoria:"Familiar",
            info:"This card has supporting text below as a natural lead-in to additional content."   
        },
        {
            nombre:"Vivienda Flia Andreu",
            img:["https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_07-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_06-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_02-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_04-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_05-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/45-Flia.%20Andreu%2002/Andreu_01-min.jpg"],
            categoria:"Familiar",
            info:"This card has supporting text below as a natural lead-in to additional content."   
        },
        {
            nombre:"Vivienda Flia Sander",
            img:["https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_10-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_03-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_07-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_08-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_09-min.jpg",
                 "https://www.conochabitar.com/hubfs/Marketing/RECURSOS%20GR%C3%81FICOS/FOTOS%20-%20IM%C3%81GENES/Web%20/Sue%C3%B1os%20cumplidos/43-Flia.%20Partcons%2001/Part01_05-min.jpg"],
            categoria:"Familiar",
            info:"This card has supporting text below as a natural lead-in to additional content."   
        }
    ]

    constructor(){
    }

    getProyectos(){
        return this.proyectos;
    }

    getProyecto(idx:number){
        return this.proyectos[idx];
    }
}

export interface Proyecto{
    nombre:string;
    img:string[];
    categoria:string;
    info:string;
};