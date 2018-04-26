import { TestBed, inject } from '@angular/core/testing';

import { CvDataService } from './cv-data.service';

describe('CvDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataService]
    });
  });

  it('should be created', inject([CvDataService], (service: CvDataService) => {
    expect(service).toBeTruthy();
  }));
});
