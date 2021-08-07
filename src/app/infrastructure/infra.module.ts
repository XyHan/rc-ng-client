import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { TechnoModule } from './techno/techno.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    TechnoModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    TechnoModule
  ]
})
export class InfraModule { }
