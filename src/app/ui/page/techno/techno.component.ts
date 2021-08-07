import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../infrastructure/value-object/nav.value-object';

@Component({
  selector: 'app-techno-page',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent {
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._navLinks = NavValueObject.navLinks
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
