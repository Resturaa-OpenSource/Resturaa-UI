import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoretranferModelComponent } from './storetranfer-model.component';

describe('StoretranferModelComponent', () => {
  let component: StoretranferModelComponent;
  let fixture: ComponentFixture<StoretranferModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoretranferModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoretranferModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
