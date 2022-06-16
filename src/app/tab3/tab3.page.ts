import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public data= [
    {
      id: '1',
      primero: 'Asistente de secretaria en la unidad Educativa Futuros Navegantes',
      segundo: 'Mesero en eventos de salones y bares',
      tercero: 'Call center en la empresa Claro - servicio al cliente'
    }
  ]

  constructor() {}

}
