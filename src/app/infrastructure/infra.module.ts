import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RoutingModule
  ]
})
export class InfraModule { }
