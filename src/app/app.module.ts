import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './infrastructure/routing/routing.module';
import { MainComponent } from './ui/layout/main/main.component';
import { Components } from './ui/component';
import { Layouts } from './ui/layout';
import { Pages } from './ui/page';

@NgModule({
  declarations: [
    ...Layouts,
    ...Pages,
    ...Components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
