import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EducationComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cv'`, () => {
    const fixture = TestBed.createComponent(EducationComponent);
    const app = fixture.componentInstance;
    expect(app.navLinks[0].label).toEqual('Technos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EducationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cv app is running!');
  });
});
