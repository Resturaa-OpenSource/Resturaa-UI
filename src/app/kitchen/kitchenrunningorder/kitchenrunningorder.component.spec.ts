import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenrunningorderComponent } from './kitchenrunningorder.component';

describe('KitchenrunningorderComponent', () => {
  let component: KitchenrunningorderComponent;
  let fixture: ComponentFixture<KitchenrunningorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenrunningorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenrunningorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
