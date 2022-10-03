import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveComponentComponent } from './wave-component.component';

describe('WaveComponentComponent', () => {
  let component: WaveComponentComponent;
  let fixture: ComponentFixture<WaveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
