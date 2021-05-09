import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatetransferComponent } from './statetransfer.component';

describe('StatetransferComponent', () => {
  let component: StatetransferComponent;
  let fixture: ComponentFixture<StatetransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatetransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
