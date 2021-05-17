import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public lista_objetos = {
    consoles: [{
         console1: "Playstation",
         versao1: "PS5"
       },
       {
         console2: "XBox",
         versao2:"XBox Series X"
       }
    ],   
    vendas: "PlaysTation",
    plataformasOnline: "Xbox",
    exclusivos: "PS5",   
  }

  constructor() { }

  ngOnInit() {
  }

}
