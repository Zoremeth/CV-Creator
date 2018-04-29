import { Injectable } from '@angular/core';
import { ContactInfo, Jobs, Schools, Languages } from './contact-info';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CvDataService {

  items: ContactInfo[] = [
    { order: 1, name: 'Date of birth', content: 'DD-MM-YYYY', icon: 'date_range' },
    { order: 2, name: 'Email', content: 'email@email.com', icon: 'email' },
    { order: 3, name: 'Phone', content: 'NUMBER', icon: 'call' },
    { order: 4, name: 'Interests', content: 'Angular', icon: 'extension' },
    { order: 5, name: 'Twitter', content: '@name', icon: 'share' },
    { order: 6, name: 'LinkedIn', content: 'John Smith', icon: 'share' }
  ];

  jobs: Jobs[] = [
    { timeframe: 'March 2018 - July 2018', name: 'Testing Inc.', functions: 'Testing HTML.' }
  ];

  schools: Schools[] = [
    { timeframe: '2014-2020', name: 'Sample University', level: 'Master' }
  ];

  languages: Languages[] = [
    { name: 'English', progress: 4 },
    { name: 'Chinese', progress: 2 },
    { name: 'Japanese', progress: 5 },
  ];

  getJobs(): Observable<Jobs[]> {
    return of(this.jobs);
  }

  getSchools(): Observable<Schools[]> {
    return of(this.schools);
  }

  getLanguages(): Observable<Languages[]> {
    return of(this.languages);
  }

  getAvatar(): Observable<string> {
    return of('');
  }

  constructor() { }

}
