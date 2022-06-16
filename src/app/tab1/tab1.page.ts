import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data = [
    {
      id:'1',
      nombres:'Xavier Roberto Cruz Ladines',
      cedula: '0954395208',
      nacionalidad: 'Ecuatoriano',
      edad: '21',
      correo: 'Xavier.cruzl@ug.edu.ec',
      celular: '0990911377'
    }
 
  ]


  constructor() {}

  
}
