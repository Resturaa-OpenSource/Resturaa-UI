import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoscustomerComponent } from './poscustomer.component';

describe('PoscustomerComponent', () => {
  let component: PoscustomerComponent;
  let fixture: ComponentFixture<PoscustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoscustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoscustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
