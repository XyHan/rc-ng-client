import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TechnoRoutes } from './techno.routing';
import { TechnoComponent } from './ui/techno.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TechnoRoutes,
  ],
  exports: [],
  declarations: [
    TechnoComponent
  ]
})
export class TechnoModule { }
