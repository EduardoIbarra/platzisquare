import {Injectable} from "@angular/core";
@Injectable()
export class AutorizacionService{
    public login = (email, password) => {
        console.log('Método de login!');
    }
    public registro = (email, password) => {
        console.log('Método de registro!');
    }
}