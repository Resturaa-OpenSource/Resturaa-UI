import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenproductComponent } from './kitchenproduct.component';

describe('KitchenproductComponent', () => {
  let component: KitchenproductComponent;
  let fixture: ComponentFixture<KitchenproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
