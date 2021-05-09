import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucontainerComponent } from './menucontainer.component';

describe('MenucontainerComponent', () => {
  let component: MenucontainerComponent;
  let fixture: ComponentFixture<MenucontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
