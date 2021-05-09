import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltableComponent } from './modaltable.component';

describe('ModaltableComponent', () => {
  let component: ModaltableComponent;
  let fixture: ComponentFixture<ModaltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
