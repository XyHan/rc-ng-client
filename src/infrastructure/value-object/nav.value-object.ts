export interface NavLinks {
  path: string;
  label: string;
  icon: string;
}

export class NavValueObject {
  public static readonly navLinks: NavLinks[] = [
    {
      path: '',
      label: 'Technos',
      icon: 'psychology',
    },
    {
      path: '',
      label: 'Jobs',
      icon: 'work_outline',
    },
    {
      path: '',
      label: 'Education',
      icon: 'school',
    },
    {
      path: '',
      label: 'Contact',
      icon: 'contact_page',
    },
  ];
}
