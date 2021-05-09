import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEmptypageComponent } from './store-emptypage.component';

describe('StoreEmptypageComponent', () => {
  let component: StoreEmptypageComponent;
  let fixture: ComponentFixture<StoreEmptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEmptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEmptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
