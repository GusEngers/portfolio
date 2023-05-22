import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-module/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'GusEngers - Portfolio',
  },
  {
    path: 'hola',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
