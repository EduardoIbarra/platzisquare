import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {active: true, nombre:'Florería la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: true, nombre:'Veterinaria Huellitas Felices'},
    {active: false, nombre:'Sushi Suhiroll'},
    {active: true, nombre:'Hotel la Gracia'},
    {active: false, nombre:'Zapatería el Clavo'}
  ];
  lat:number = 4.6560663;
  lng:number = -74.0595918;
  constructor(){

  }
}
