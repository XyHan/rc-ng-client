export interface NavLinks {
  path: string;
  label: string;
}

export class NavValueObject {
  public static readonly navLinks: NavLinks[] = [
    {
      path: '',
      label: 'Technos',
    },
    {
      path: '',
      label: 'Jobs',
    },
    {
      path: '',
      label: 'Education',
    },
    {
      path: '',
      label: 'Contact',
    },
  ];
}
