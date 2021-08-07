import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ContactComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cv'`, () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app.navLinks[0].label).toEqual('Technos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cv app is running!');
  });
});
