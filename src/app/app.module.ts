import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './layout/main/main.component';
import { MainLayout } from './layout/main';

@NgModule({
  declarations: [
    ...MainLayout,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
