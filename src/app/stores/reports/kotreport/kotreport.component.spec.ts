import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotreportComponent } from './kotreport.component';

describe('KotreportComponent', () => {
  let component: KotreportComponent;
  let fixture: ComponentFixture<KotreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
