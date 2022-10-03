import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingComponentComponent } from './floating-component.component';

describe('FloatingComponentComponent', () => {
  let component: FloatingComponentComponent;
  let fixture: ComponentFixture<FloatingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
