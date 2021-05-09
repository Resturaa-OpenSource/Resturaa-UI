import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchendeliveryComponent } from './kitchendelivery.component';

describe('KitchendeliveryComponent', () => {
  let component: KitchendeliveryComponent;
  let fixture: ComponentFixture<KitchendeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchendeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchendeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
