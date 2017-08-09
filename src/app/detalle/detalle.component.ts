import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    id = null;
    lugar:any = {};
    constructor(private route: ActivatedRoute, private lugaresService:LugaresService){
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action2']);
        console.log(this.route.snapshot.queryParams['referer']);
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }
}