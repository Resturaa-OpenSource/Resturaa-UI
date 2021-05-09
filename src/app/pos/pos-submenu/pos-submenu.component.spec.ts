import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSubmenuComponent } from './pos-submenu.component';

describe('PosSubmenuComponent', () => {
  let component: PosSubmenuComponent;
  let fixture: ComponentFixture<PosSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
