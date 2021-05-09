import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenEmptypageComponent } from './kitchen-emptypage.component';

describe('KitchenEmptypageComponent', () => {
  let component: KitchenEmptypageComponent;
  let fixture: ComponentFixture<KitchenEmptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenEmptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenEmptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
