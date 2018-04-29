import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { Jobs, Schools, Languages } from '../contact-info';

@Component({
  selector: ' cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css']
})
export class CvContentComponent implements OnInit {

  numbers: Number[] = [];
  jobs?: Jobs[];
  schools?: Schools[];
  languages?: Languages[];

  constructor(private dataService: CvDataService) {
    this.numbers = Array(10).fill(0).map((x, i) => i);
  }
  setJobs(): void {
    this.dataService.getJobs().subscribe(data => this.jobs = data, error => console.log(error));
  }

  setSchools(): void {
    this.dataService.getSchools().subscribe(data => this.schools = data, error => console.log(error));
  }

  setLanguages(): void {
    this.dataService.getLanguages().subscribe(data => this.languages = data, error => console.log(error));
  }

  ngOnInit() {
    this.setJobs();
    this.setSchools();
    this.setLanguages();
  }
}



