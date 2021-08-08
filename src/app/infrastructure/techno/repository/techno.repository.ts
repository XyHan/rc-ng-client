import { Injectable } from '@angular/core';
import { TechnoInterface } from '../../../domain/techno/model/techno.model';
import { from, merge, Observable } from 'rxjs';

export interface TechnoRepositoryInterface {
  findAll(): Observable<TechnoInterface[]>;
  add(): void;
}

@Injectable()
export class TechnoRepository implements TechnoRepositoryInterface {
  private readonly _technos: TechnoInterface[] = [
    {
      name: 'PHP',
      slug: 'php',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1920px-PHP-logo.svg.png',
      rating: 4,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar tempus lectus, eu tristique sapien luctus vel. 
          Maecenas cursus enim at magna mattis efficitur. Pellentesque ut turpis mauris. 
          Morbi sapien dolor, fermentum quis ipsum quis, commodo laoreet metus. 
          Aliquam tempus nisi dui, sit amet consectetur felis elementum elementum. Maecenas eu molestie justo. 
          Fusce vitae orci rhoncus, pretium sem lacinia, faucibus arcu. Fusce semper facilisis sem sit amet elementum. 
          Praesent a metus ligula. Pellentesque eu ullamcorper ex, porttitor varius quam. Nulla consectetur urna vitae lorem sollicitudin iaculis.
        `,
    },
    {
      name: 'TypeScript',
      slug: 'typescript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/TypeScript_Logo.png',
      rating: 2,
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar tempus lectus, eu tristique sapien luctus vel. 
          Maecenas cursus enim at magna mattis efficitur. Pellentesque ut turpis mauris. 
          Morbi sapien dolor, fermentum quis ipsum quis, commodo laoreet metus. 
          Aliquam tempus nisi dui, sit amet consectetur felis elementum elementum. Maecenas eu molestie justo. 
          Fusce vitae orci rhoncus, pretium sem lacinia, faucibus arcu. Fusce semper facilisis sem sit amet elementum. 
          Praesent a metus ligula. Pellentesque eu ullamcorper ex, porttitor varius quam. Nulla consectetur urna vitae lorem sollicitudin iaculis.
        `,
    }
  ];

  private readonly _technos$: Observable<TechnoInterface[]> = new Observable();

  constructor() {
    this._technos$ = merge(this._technos$, from([this._technos]));
  }

  findAll(): Observable<TechnoInterface[]> {
    return this._technos$;
  }

  add(): void {
    this._technos.push(
      {
        name: 'HTML',
        slug: 'html',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/langfr-800px-HTML5_logo_and_wordmark.svg.png',
        rating: 5,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar tempus lectus, eu tristique sapien luctus vel.
          Maecenas cursus enim at magna mattis efficitur. Pellentesque ut turpis mauris.
          Morbi sapien dolor, fermentum quis ipsum quis, commodo laoreet metus.
          Aliquam tempus nisi dui, sit amet consectetur felis elementum elementum. Maecenas eu molestie justo.
          Fusce vitae orci rhoncus, pretium sem lacinia, faucibus arcu. Fusce semper facilisis sem sit amet elementum.
          Praesent a metus ligula. Pellentesque eu ullamcorper ex, porttitor varius quam. Nulla consectetur urna vitae lorem sollicitudin iaculis.
        `,
      }
    )
  }
}
