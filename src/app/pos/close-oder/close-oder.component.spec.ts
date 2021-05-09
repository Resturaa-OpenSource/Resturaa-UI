import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOderComponent } from './close-oder.component';

describe('CloseOderComponent', () => {
  let component: CloseOderComponent;
  let fixture: ComponentFixture<CloseOderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseOderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
