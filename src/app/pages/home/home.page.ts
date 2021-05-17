import { Component, OnInit } from '@angular/core';

import { ListaService } from './../service/lista.service';
import { Informacao } from '../service/lista';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public lista: Informacao

  constructor(
    private dados: ListaService
  ) {
  
   }

  ngOnInit() {
    this.dados.getLista().subscribe
    (
      (res)=> {
        this.lista= res;
      },
      (error) => {
        console.log("Error" + error);
      }
    )
  }

  // controle() {
  //   this.dados.getLista().subscribe
  //     (
  //       (response) => {
  //         this.lista = response;
  //       },
  //       (error) => {
  //         console.log("Error" + error);
  //       }
  //     )
  // }

}
