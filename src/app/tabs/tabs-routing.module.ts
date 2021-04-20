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
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },

      {
        path: 'tab3',
        loadChildren: () => import('../pages/X-Box/x-box.module').then(m => m.XBoxPageModule)
      },
      
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
export class TabsPageRoutingModule { }
