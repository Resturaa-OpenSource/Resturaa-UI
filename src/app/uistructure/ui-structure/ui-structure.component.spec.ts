import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStructureComponent } from './ui-structure.component';

describe('UiStructureComponent', () => {
  let component: UiStructureComponent;
  let fixture: ComponentFixture<UiStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
