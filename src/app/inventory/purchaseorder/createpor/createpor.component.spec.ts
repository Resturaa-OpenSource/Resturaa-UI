import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateporComponent } from './createpor.component';

describe('CreateporComponent', () => {
  let component: CreateporComponent;
  let fixture: ComponentFixture<CreateporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateporComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
