import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre:string = '';

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
}
