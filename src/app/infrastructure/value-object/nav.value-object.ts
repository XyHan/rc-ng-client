export interface NavLinks {
  path: string;
  label: string;
  icon: string;
}

export class NavValueObject {
  public static readonly navLinks: NavLinks[] = [
    {
      path: 'technos',
      label: 'Technos',
      icon: 'psychology',
    },
    {
      path: 'jobs',
      label: 'Jobs',
      icon: 'work',
    },
    {
      path: 'formations',
      label: 'Formations',
      icon: 'school',
    },
    {
      path: 'contact',
      label: 'Contact',
      icon: 'contact_page',
    },
  ];
}
