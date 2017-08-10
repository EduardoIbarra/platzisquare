import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private autorizacionService:AutorizacionService){
    }
    login(){
        this.autorizacionService.login('email', 'password');
    }
}