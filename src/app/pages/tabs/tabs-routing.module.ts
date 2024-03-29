import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // Path por defecto
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    // A continuación definimos las rutas hijas de los tabs
    children: [
      {
        path:'account',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path:'contact',
        loadChildren: () => import('../segment/segment.module').then(m => m.SegmentPageModule)
      },
      {
        path:'settings',
        loadChildren: () => import('../infinite/infinite.module').then(m => m.InfinitePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
