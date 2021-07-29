import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { InfraModule } from '../../infrastructure/infra.module';
import { TechnoComponent } from './techno/techno.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [IndexComponent, TechnoComponent, ContactComponent],
  imports: [InfraModule],
  exports: [IndexComponent, TechnoComponent, ContactComponent]
})
export class PageModule { }
