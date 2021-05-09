import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosproductselectionComponent } from './posproductselection.component';

describe('PosproductselectionComponent', () => {
  let component: PosproductselectionComponent;
  let fixture: ComponentFixture<PosproductselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosproductselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosproductselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
