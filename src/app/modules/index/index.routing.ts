import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './ui/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
];

export const IndexRoutes = RouterModule.forChild(routes);
