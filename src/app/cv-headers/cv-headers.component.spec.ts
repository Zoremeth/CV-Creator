import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHeadersComponent } from './cv-headers.component';

describe('CvHeadersComponent', () => {
  let component: CvHeadersComponent;
  let fixture: ComponentFixture<CvHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
