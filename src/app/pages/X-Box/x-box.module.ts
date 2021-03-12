import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { XBoxPage } from './x-box.page';

import { XBoxPageRoutingModule } from './x-box-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: XBoxPage }]),
    XBoxPageRoutingModule,
  ],
  declarations: [XBoxPage]
})
export class XBoxPageModule {}
