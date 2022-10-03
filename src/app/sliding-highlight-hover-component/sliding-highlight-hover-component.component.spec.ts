import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingHighlightHoverComponentComponent } from './sliding-highlight-hover-component.component';

describe('SlidingHighlightHoverComponentComponent', () => {
  let component: SlidingHighlightHoverComponentComponent;
  let fixture: ComponentFixture<SlidingHighlightHoverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingHighlightHoverComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingHighlightHoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
