import { NgModule } from '@angular/core';
import { InfraModule } from '../infrastructure/infra.module';
import { Components } from './component';
import { Layouts } from './layout';
import { Pages } from './page';

@NgModule({
  declarations: [
    ...Layouts,
    ...Pages,
    ...Components
  ],
  imports: [InfraModule]
})
export class UiModule { }
