import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NitendoPageRoutingModule } from './nitendo-routing.module';

import { NitendoPage } from './nitendo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NitendoPageRoutingModule
  ],
  declarations: [NitendoPage]
})
export class NitendoPageModule {}
