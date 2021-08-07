import { Rating } from '../../type/rating.type';

export interface TechnoInterface {
  name: string;
  slug: string;
  logo: string;
  rating: Rating;
  description: string;
}

export class TechnoModel implements TechnoInterface {
  private _description: string;
  private _logo: string;
  private _name: string;
  private _rating: Rating;
  private _slug: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get rating(): Rating {
    return this._rating;
  }

  set rating(value: Rating) {
    this._rating = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }
}
