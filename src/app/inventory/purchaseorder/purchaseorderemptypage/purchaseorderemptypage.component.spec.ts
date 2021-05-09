import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderemptypageComponent } from './purchaseorderemptypage.component';

describe('PurchaseorderemptypageComponent', () => {
  let component: PurchaseorderemptypageComponent;
  let fixture: ComponentFixture<PurchaseorderemptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderemptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderemptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
