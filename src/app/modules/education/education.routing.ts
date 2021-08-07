import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './ui/education.component';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent
  },
];

export const EducationRoutes = RouterModule.forChild(routes);
