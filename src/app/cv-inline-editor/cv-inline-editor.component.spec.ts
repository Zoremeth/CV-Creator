import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvInlineEditorComponent } from './cv-inline-editor.component';

describe('CvInlineEditorComponent', () => {
  let component: CvInlineEditorComponent;
  let fixture: ComponentFixture<CvInlineEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvInlineEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvInlineEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
