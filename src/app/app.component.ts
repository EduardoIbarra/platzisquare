import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
    {plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
    {plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'}
  ];
  lat:number = 4.6560663;
  lng:number = -74.0595918;
  constructor(){

  }
}
