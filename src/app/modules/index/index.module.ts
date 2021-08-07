import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './ui/index.component';
import { IndexRoutes } from './index.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IndexRoutes,
  ],
  exports: [],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule { }
