import { Component } from '@angular/core';
import {NavLinks, NavValueObject} from "../../../infrastructure/value-object/nav.value-object";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._navLinks = NavValueObject.navLinks
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
