import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSubmenuComponent } from './store-submenu.component';

describe('StoreSubmenuComponent', () => {
  let component: StoreSubmenuComponent;
  let fixture: ComponentFixture<StoreSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
