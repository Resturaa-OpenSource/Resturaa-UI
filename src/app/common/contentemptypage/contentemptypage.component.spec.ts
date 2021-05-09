import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentemptypageComponent } from './contentemptypage.component';

describe('ContentemptypageComponent', () => {
  let component: ContentemptypageComponent;
  let fixture: ComponentFixture<ContentemptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentemptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentemptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
