import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../../ui/page/index/index.component';
import { TechnoComponent } from '../../ui/page/techno/techno.component';
import { ContactComponent } from '../../ui/page/contact/contact.component';
import { JobComponent } from '../../ui/page/job/job.component';
import { EducationComponent } from '../../ui/page/education/education.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'technos',
    component: TechnoComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'jobs',
    component: JobComponent
  },
  {
    path: 'formations',
    component: EducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
