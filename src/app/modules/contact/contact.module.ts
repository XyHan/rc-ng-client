import { NgModule } from '@angular/core';
import { ContactComponent } from './ui/component/contact.component';
import { RouterModule } from '@angular/router';
import { ContactRoutes } from './contact.routing';

@NgModule({
  imports: [
    RouterModule,
    ContactRoutes
  ],
  exports: [],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
