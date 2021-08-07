import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './ui/component/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
];

export const ContactRoutes = RouterModule.forChild(routes);
