import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryemptypageComponent } from './inventoryemptypage.component';

describe('InventoryemptypageComponent', () => {
  let component: InventoryemptypageComponent;
  let fixture: ComponentFixture<InventoryemptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryemptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryemptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
