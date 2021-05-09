import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcontentComponent } from './reportcontent.component';

describe('ReportcontentComponent', () => {
  let component: ReportcontentComponent;
  let fixture: ComponentFixture<ReportcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
