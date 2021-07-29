import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { InfraModule } from '../../infrastructure/infra.module';
import { TechnoComponent } from './techno/techno.component';

@NgModule({
  declarations: [IndexComponent, TechnoComponent],
  imports: [InfraModule],
  exports: [IndexComponent, TechnoComponent]
})
export class PageModule { }
