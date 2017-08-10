import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent {
    constructor(private autorizacionService:AutorizacionService){
        this.autorizacionService.registro('email', 'password');
    }
}