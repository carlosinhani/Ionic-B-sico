import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GooglePage } from './google.page';

import { GooglePageRoutingModule} from './google-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GooglePageRoutingModule
  ],
  declarations: [GooglePage]
})
export class GooglePageModule {}
