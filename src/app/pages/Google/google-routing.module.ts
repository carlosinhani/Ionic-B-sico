import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GooglePage } from './google.page';

const routes: Routes = [
  {
    path: '',
    component: GooglePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglePageRoutingModule {}
