import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../infrastructure/value-object/nav.value-object';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._navLinks = NavValueObject.navLinks
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
