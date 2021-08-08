import { Inject, Injectable } from '@angular/core';
import { TechnoInterface } from '../../../domain/techno/model/techno.model';
import { TechnoRepository, TechnoRepositoryInterface } from '../repository/techno.repository';
import { Observable } from 'rxjs';

export interface TechnoServiceInterface {
  listAllTechnos(): Observable<TechnoInterface[]>;
  addTechno(): void;
}

@Injectable()
export class TechnoService implements TechnoServiceInterface {
  constructor(
    @Inject(TechnoRepository) private readonly _technoRepository: TechnoRepositoryInterface
  ) {}

  listAllTechnos(): Observable<TechnoInterface[]> {
    return this._technoRepository.findAll();
  }

  addTechno(): void {
    return this._technoRepository.add();
  }
}
