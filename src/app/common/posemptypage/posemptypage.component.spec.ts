import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosemptypageComponent } from './posemptypage.component';

describe('PosemptypageComponent', () => {
  let component: PosemptypageComponent;
  let fixture: ComponentFixture<PosemptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosemptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosemptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
