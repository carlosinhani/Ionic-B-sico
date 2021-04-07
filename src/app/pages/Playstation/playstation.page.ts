import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playstation',
  templateUrl: 'playstation.page.html',
  styleUrls: ['playstation.page.scss']
})
export class PlaystationPage {

  public playStore:string = "Nome do Usuário";

  constructor(
     private router: Router
  ) {}

  contaSony(num1, num2):void{
    alert( num1 + num2 );
  }

  result(){
    this.contaSony(10, 99);
  }

}
