import { Component } from '@angular/core';
import { NavLinks, NavValueObject } from '../../../infrastructure/value-object/nav.value-object';

@Component({
  selector: 'app-job-page',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  private readonly _navLinks: NavLinks[];

  constructor() {
    this._navLinks = NavValueObject.navLinks
  }

  get navLinks(): NavLinks[] {
    return this._navLinks;
  }
}
