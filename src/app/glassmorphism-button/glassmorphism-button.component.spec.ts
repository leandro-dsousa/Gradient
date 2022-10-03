import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphismButtonComponent } from './glassmorphism-button.component';

describe('GlassmorphismButtonComponent', () => {
  let component: GlassmorphismButtonComponent;
  let fixture: ComponentFixture<GlassmorphismButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassmorphismButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassmorphismButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
