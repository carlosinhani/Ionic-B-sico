import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"




@Injectable()
export class ListaService {

    constructor(
        private http: HttpClient ,
    ){ }

}

// return this.http.get<Informacao>('../../../assets/lista.json');
    