import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
@Injectable()
export class AutorizacionService{
    constructor(private angularFireAuth: AngularFireAuth){
        this.isLogged();
    }
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((response)=>{
                alert('Usuario Loggeado con éxito!');
                console.log(response);
            })
            .catch((error)=>{
                alert('Un error ha ocurrido');
                console.log(error);
            })
    }
    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response)=>{
                alert('Usuario Registrado con éxito!');
                console.log(response);
            })
            .catch((error)=>{
                alert('Un error ha ocurrido');
                console.log(error);
            })
    }
    public isLogged(){
        return this.angularFireAuth.authState;
    }
}