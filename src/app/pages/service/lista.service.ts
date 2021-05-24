import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { Informacao } from './lista';

@Injectable()
export class ListaService {

    constructor(
        private http: HttpClient ,
    ){ }


 getConsole(){
    return this.http.get<Informacao>('../../../assets/json/lista.json');
 }     

}

    