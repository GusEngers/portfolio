import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ProjectsComponent, ProjectComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
