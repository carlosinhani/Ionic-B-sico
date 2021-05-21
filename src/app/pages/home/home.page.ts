import { Component, OnInit } from '@angular/core';
import { Informacao } from '../service/lista';
import { ListaService } from './../service/lista.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  plataforma: Informacao

  constructor(
    private dados: ListaService
  ) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.dados.getConsole().subscribe(
      (res) => {
        this.plataforma = res;
      },
      (error) => {
        console.log("Algo errado não esta certo" + error);
      }
    )
  }
}
