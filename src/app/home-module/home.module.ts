import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
