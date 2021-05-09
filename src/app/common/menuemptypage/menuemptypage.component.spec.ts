import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuemptypageComponent } from './menuemptypage.component';

describe('MenuemptypageComponent', () => {
  let component: MenuemptypageComponent;
  let fixture: ComponentFixture<MenuemptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuemptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuemptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
