import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../infrastructure/value-object/nav.value-object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _forname: string;
  private _lastname: string;
  private _navLinks: NavLinks[];

  constructor() {
    this._forname = 'Robin';
    this._lastname = 'Chevalier';
    this._navLinks = NavValueObject.navLinks
  }

  get forname(): string {
    return this._forname;
  }

  set forname(value: string) {
    this._forname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }

  set navLinks(value: NavLinks[]) {
    this._navLinks = value;
  }
}
