import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../core/value-object/nav.value-object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly _forname: string;
  private readonly _lastname: string;
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._forname = 'Robin';
    this._lastname = 'Chevalier';
    this._navLinks = NavValueObject.navLinks
  }

  get forname(): string {
    return this._forname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
