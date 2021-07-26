import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { CommonModule } from '@angular/common';

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
