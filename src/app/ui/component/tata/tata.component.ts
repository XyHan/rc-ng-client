import { Component, Inject, OnInit } from '@angular/core';
import { TechnoService, TechnoServiceInterface } from '../../../infrastructure/techno/service/techno.service';
import { TechnoInterface } from '../../../domain/techno/model/techno.model';

@Component({
  selector: 'app-tata',
  templateUrl: './tata.component.html',
  styleUrls: ['./tata.component.scss']
})
export class TataComponent implements OnInit {
  private _technos: TechnoInterface[];

  constructor(@Inject(TechnoService) private readonly _technoService: TechnoServiceInterface) {}

  ngOnInit() {
    this._technoService.listAllTechnos().subscribe((technos) => this._technos = technos);
  }

  get technos(): TechnoInterface[] {
    return this._technos;
  }
}
