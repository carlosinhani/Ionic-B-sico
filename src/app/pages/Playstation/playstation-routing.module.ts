import { XBoxPageRoutingModule } from './../X-Box/x-box-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaystationPage } from './playstation.page';
import { XBoxPage } from '../X-Box/x-box.page';

const routes: Routes = [
  {
    path: '',
    component: PlaystationPage,
  },
  {
    path:"xbox",
    component: XBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaystationPageRoutingModule {}
