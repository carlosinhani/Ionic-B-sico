import { Component } from '@angular/core';

@Component({
  selector: 'app-x-box',
  templateUrl: 'x-box.page.html',
  styleUrls: ['x-box.page.scss']
})
export class XBoxPage {
  
  public xBoxLive:string = "XBox" 

  constructor() {}


 clicando(){
   console.log('clicando')
 }
}
