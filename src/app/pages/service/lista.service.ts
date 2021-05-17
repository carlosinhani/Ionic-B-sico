import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { Informacao } from './lista';

@Injectable()
export class ListaService {

    constructor(
        private http: HttpClient ,
    ){ }

    public getLista(){
        return this.http.get<Informacao>('../service/lista.json');
    }
}