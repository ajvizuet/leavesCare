import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const myroutes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      { 
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('../tab4/tab4.page').then((m)=> m.Tab4Page),
      },
      {
        path: 'tab5',
        loadComponent: () =>
          import('../tab5/tab5.page').then((m)=> m.Tab5Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab3',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full',
  },
];
