import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { InfraModule } from '../infrastructure/infra.module';
import { PageModule } from './page/page.module';
import { MainComponent } from './layout/main/main.component';
import { RoutingModule } from '../infrastructure/routing.module';

@NgModule({
  imports: [
    InfraModule,
    LayoutModule,
    PageModule,
    RoutingModule
  ],
  bootstrap: [MainComponent]
})
export class UiModule { }
