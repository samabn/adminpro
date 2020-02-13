import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* RUTAS */
// import { PagesComponent } from 'src/app/pages/pages.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/login/register.component';
// import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
// import { ProgressComponent } from 'src/app/pages/progress/progress.component';
// import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';
// import { NopagefoundComponent } from 'src/app/nopagefound/nopagefound.component';


const routes: Routes = [
  // { path: '', component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'graficas1', component: Graficas1Component },
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //   ]
  //},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
