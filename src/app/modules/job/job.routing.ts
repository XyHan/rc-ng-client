import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './ui/job.component';

const routes: Routes = [
  {
    path: '',
    component: JobComponent
  },
];

export const JobRoutes = RouterModule.forChild(routes);
