import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactModule } from './modules/contact/contact.module';
import { JobModule } from './modules/job/job.module';
import { TechnoModule } from './modules/techno/techno.module';
import { EducationModule } from './modules/education/education.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => ContactModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./modules/job/job.module').then(m => JobModule)
  },
  {
    path: 'technos',
    loadChildren: () => import('./modules/techno/techno.module').then(m => TechnoModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./modules/education/education.module').then(m => EducationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
