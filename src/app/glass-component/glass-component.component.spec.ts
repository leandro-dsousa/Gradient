import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassComponentComponent } from './glass-component.component';

describe('GlassComponentComponent', () => {
  let component: GlassComponentComponent;
  let fixture: ComponentFixture<GlassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
