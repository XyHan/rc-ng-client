import { RouterModule, Routes } from '@angular/router';
import { TechnoComponent } from './ui/techno.component';

const routes: Routes = [
  {
    path: '',
    component: TechnoComponent
  },
];

export const TechnoRoutes = RouterModule.forChild(routes);
