import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from "@angular/router";
import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {LugaresService} from "./services/lugares.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CrearComponent} from "./crear/crear.component";
const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: CrearComponent},
];
export const firebaseConfig = {
  apiKey: "AIzaSyCqRLh5FrTaNAw4U8HzanVF98ONe6xsN9k",
  authDomain: "platzisquare.firebaseapp.com",
  databaseURL: "https://platzisquare.firebaseio.com",
  storageBucket: "platzisquare.appspot.com",
  messagingSenderId: "876436758177"
};
@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
      ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
      ContactoComponent,
      CrearComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
