import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EducationRoutes } from './education.routing';
import { EducationComponent } from './ui/education.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EducationRoutes,
  ],
  exports: [],
  declarations: [
    EducationComponent
  ]
})
export class EducationModule { }
