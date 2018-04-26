import { Injectable } from '@angular/core';
import { ContactInfo, Jobs } from './contact-info';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CvDataService {

  items: ContactInfo[] = [
    { order: 1, name: 'Date of birth', content: 'DD-MM-YYYY' },
    { order: 2, name: 'Email', content: 'email@email.com' },
    { order: 3, name: 'Phone', content: 'NUMBER' },
    { order: 4, name: 'Interests', content: 'Angular' },
    { order: 5, name: 'Twitter', content: '@name' },
    { order: 6, name: 'LinkedIn', content: 'John Smith' }
  ];

  jobs: Jobs[] = [
    { timeframe: 'March 2018 - July 2018', name: 'Testing Inc.', functions: 'Testing HTML.' }
  ];

  getJobs(): Observable<Jobs[]> {
    return of(this.jobs);
  }
  getAvatar(): Observable<string> {
    // Temporary
    return of('https://www.computerhope.com/jargon/u/uppercase.jpg');
  }
  constructor() { }

}
