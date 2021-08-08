import { Component, Inject, OnInit } from '@angular/core';
import { TechnoInterface} from '../../../domain/techno/model/techno.model';
import { TechnoService, TechnoServiceInterface } from '../../../infrastructure/techno/service/techno.service';

@Component({
  selector: 'app-techno-page',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent implements OnInit {
  private _technos: TechnoInterface[];

  constructor(@Inject(TechnoService) private readonly _technoService: TechnoServiceInterface) {}

  ngOnInit() {
    this._technoService.listAllTechnos().subscribe(technos => this._technos = technos);
  }

  addTechno(): void {
    this._technoService.addTechno();
  }

  get technos(): TechnoInterface[] {
    return this._technos;
  }
}
