import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalproductsComponent } from './modalproducts.component';

describe('ModalproductsComponent', () => {
  let component: ModalproductsComponent;
  let fixture: ComponentFixture<ModalproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
