import { Component, OnInit } from '@angular/core';
import { ListaService } from './../service/lista.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private dados: ListaService
  ) {
  
   }

  ngOnInit() {
    
  }

  

}
