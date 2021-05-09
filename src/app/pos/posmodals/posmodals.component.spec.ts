import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosmodalsComponent } from './posmodals.component';

describe('PosmodalsComponent', () => {
  let component: PosmodalsComponent;
  let fixture: ComponentFixture<PosmodalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosmodalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosmodalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
