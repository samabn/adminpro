import { NgModule } from '@angular/core';

// MODULO
import { SharedModule } from '../shared/shared.module';

// RUTAS
import { PAGESROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    SharedModule,
    PAGESROUTES
  ]
})

export class PagesModule {}
