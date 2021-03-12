import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/Playstation/playstation.module').then(m => m.PlaystationPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/Google/google.module').then(m => m.GooglePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/X-Box/x-box.module').then(m => m.XBoxPageModule)
      },
      {
        path: 'tab4',
        loadChildren:() => import('../pages/Nitendo/nitendo.module').then(m=> m.NitendoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
