import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobRoutes } from './job.routing';
import { JobComponent } from './ui/job.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    JobRoutes,
  ],
  exports: [],
  declarations: [
    JobComponent
  ]
})
export class JobModule { }
