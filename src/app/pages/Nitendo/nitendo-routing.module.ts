import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NitendoPage } from './nitendo.page';

const routes: Routes = [
  {
    path: '',
    component: NitendoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NitendoPageRoutingModule {}
