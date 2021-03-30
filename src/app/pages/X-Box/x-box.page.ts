import { Component } from '@angular/core';

@Component({
  selector: 'app-x-box',
  templateUrl: 'x-box.page.html',
  styleUrls: ['x-box.page.scss']
})
export class XBoxPage {
  varios: [20, 15, 21];
  constructor() {}


 clicando(){
   console.log('clicando')
 }
}
