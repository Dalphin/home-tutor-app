import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

//import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
