import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSubmenuComponent } from './kitchen-submenu.component';

describe('KitchenSubmenuComponent', () => {
  let component: KitchenSubmenuComponent;
  let fixture: ComponentFixture<KitchenSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
