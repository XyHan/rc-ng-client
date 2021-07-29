import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { InfraModule } from '../../infrastructure/infra.module';
import { TechnoComponent } from './techno/techno.component';
import { ContactComponent } from './contact/contact.component';
import { JobComponent } from './job/job.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [IndexComponent, TechnoComponent, ContactComponent, JobComponent, EducationComponent],
  imports: [InfraModule],
  exports: [IndexComponent, TechnoComponent, ContactComponent, JobComponent, EducationComponent]
})
export class PageModule { }
