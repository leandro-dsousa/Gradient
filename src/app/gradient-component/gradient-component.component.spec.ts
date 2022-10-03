import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientComponentComponent } from './gradient-component.component';

describe('GradientComponentComponent', () => {
  let component: GradientComponentComponent;
  let fixture: ComponentFixture<GradientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
