import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningorderComponent } from './runningorder.component';

describe('RunningorderComponent', () => {
  let component: RunningorderComponent;
  let fixture: ComponentFixture<RunningorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
