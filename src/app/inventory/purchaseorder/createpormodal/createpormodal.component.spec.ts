import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepormodalComponent } from './createpormodal.component';

describe('CreatepormodalComponent', () => {
  let component: CreatepormodalComponent;
  let fixture: ComponentFixture<CreatepormodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepormodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepormodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
