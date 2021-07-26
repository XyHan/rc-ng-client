import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { InfraModule } from '../../infrastructure/infra.module';
import { ComponentModule } from '../component/component.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    InfraModule,
    ComponentModule,
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
