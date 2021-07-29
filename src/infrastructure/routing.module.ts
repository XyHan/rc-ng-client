import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../ui/page/index/index.component';
import { TechnoComponent } from '../ui/page/techno/techno.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'technos',
    component: TechnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
