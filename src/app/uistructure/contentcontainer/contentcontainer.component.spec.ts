import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcontainerComponent } from './contentcontainer.component';

describe('ContentcontainerComponent', () => {
  let component: ContentcontainerComponent;
  let fixture: ComponentFixture<ContentcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
