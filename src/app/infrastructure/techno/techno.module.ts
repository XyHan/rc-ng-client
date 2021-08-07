import { NgModule } from '@angular/core';
import { TechnoService } from './service/techno.service';
import { TechnoRepository } from './repository/techno.repository';

@NgModule({
  providers: [
    TechnoService,
    TechnoRepository,
  ],
})
export class TechnoModule { }
