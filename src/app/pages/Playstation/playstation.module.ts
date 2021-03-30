import { XBoxPage } from './../X-Box/x-box.page';
import { XBoxPageModule } from './../X-Box/x-box.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaystationPage } from './playstation.page';

import { PlaystationPageRoutingModule } from './playstation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlaystationPageRoutingModule
  ],
  declarations: [
    PlaystationPage,
    XBoxPage
  ]
})
export class PlaystationPageModule {}
