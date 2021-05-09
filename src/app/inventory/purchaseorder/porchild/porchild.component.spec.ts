import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorchildComponent } from './porchild.component';

describe('PorchildComponent', () => {
  let component: PorchildComponent;
  let fixture: ComponentFixture<PorchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
