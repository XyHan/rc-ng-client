import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../infrastructure/value-object/nav.value-object';

@Component({
  selector: 'app-education-page',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._navLinks = NavValueObject.navLinks
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
