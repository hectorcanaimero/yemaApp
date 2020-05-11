import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(t => t.HomePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'biblia',
        loadChildren: () => import('../biblia/biblia.module').then( m => m.BibliaPageModule)
      },
      {
        path: 'play',
        loadChildren: () => import('../play/play.module').then( m => m.PlayPageModule)
      },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
