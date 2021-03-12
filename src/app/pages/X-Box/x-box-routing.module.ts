import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { XBoxPage } from './x-box.page';

const routes: Routes = [
  {
    path: '',
    component: XBoxPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XBoxPageRoutingModule {}
