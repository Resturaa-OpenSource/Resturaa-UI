import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyreportComponent } from './emptyreport.component';

describe('EmptyreportComponent', () => {
  let component: EmptyreportComponent;
  let fixture: ComponentFixture<EmptyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
