import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  { path: 'punto5', component: Punto5Component },
  { path: 'home', component: HomeComponent },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto1', component: Punto1Component },
  { path: 'models', component: ModelsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

