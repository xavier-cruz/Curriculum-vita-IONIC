import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public data= [
   {
    id:'1',
    primaria: 'Escuela Docotor Pareja Diezcanseco',
    secundaria: 'Unidad Educativa Futuros Navegantes (Bachillerato en Ciencias)',
    universidad: 'Universidad Estatal de Guayaquil (Carrera Ing en Sistemas de informacion-sexto semestre)',
    adicional: 'Curso de Excel'

   }
  ]

  
  constructor() {}

}
