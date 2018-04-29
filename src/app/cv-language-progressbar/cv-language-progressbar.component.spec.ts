import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLanguageProgressbarComponent } from './cv-language-progressbar.component';

describe('CvLanguageProgressbarComponent', () => {
  let component: CvLanguageProgressbarComponent;
  let fixture: ComponentFixture<CvLanguageProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvLanguageProgressbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLanguageProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
