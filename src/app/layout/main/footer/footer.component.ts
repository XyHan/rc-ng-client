import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../core/value-object/nav.value-object';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private readonly _currentYear: string;
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._currentYear = new Date().getFullYear().toString();
    this._navLinks = NavValueObject.navLinks
  }

  get currentYear(): string {
    return this._currentYear;
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
