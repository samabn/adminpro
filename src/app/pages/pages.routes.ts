import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'src/app/pages/progress/progress.component';
import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';
import { NopagefoundComponent } from 'src/app/nopagefound/nopagefound.component';

const ROUTES: Routes = [
  {
    path: '', component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
  },
  { path: '**', component: NopagefoundComponent }
];

export const PAGESROUTES = RouterModule.forChild(ROUTES);
