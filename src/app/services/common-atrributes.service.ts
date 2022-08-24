import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonAtrributesService {
  colors = [
    "Blanco",
    "Negro",
    "Rojo",
    "Verde",
    "Amarillo",
    "Azul",
    "Café",
    "Morado",
    "Rosado",
    "Gris",
    "Plateado",
    
  ]
  constructor() { }

  get years(){
    const date = new Date();
    const year = date.getFullYear();
    const array = [];
    for (let i=2008;i<=year;i++){
      array.push(i);
    }
    return array;
  }

  

  
}
