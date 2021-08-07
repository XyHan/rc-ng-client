import { Component, Inject } from '@angular/core';
import { TechnoInterface} from '../../../domain/techno/model/techno.model';
import { TechnoService, TechnoServiceInterface } from '../../../infrastructure/techno/service/techno.service';

@Component({
  selector: 'app-techno-page',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent {
  private _technos: TechnoInterface[];

  constructor(
    @Inject(TechnoService) private readonly _technoService: TechnoServiceInterface
  ) {
    this._technoService.listAllTechnos().subscribe(technos => this._technos = technos);
  }

  get technos(): TechnoInterface[] {
    return this._technos;
  }
}
