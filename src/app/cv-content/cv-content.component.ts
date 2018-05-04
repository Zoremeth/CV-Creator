import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { Jobs, Schools, Languages } from '../contact-info';
@Component({
  selector: ' cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css'],
})

export class CvContentComponent implements OnInit {

  jobs?: Jobs[];
  schools?: Schools[];
  name?: string;

  constructor(private dataService: CvDataService) {
    this.name = 'test';
  }
  setJobs(): void {
    this.dataService.getJobs().subscribe(data => this.jobs = data, error => console.log(error));
  }

  setSchools(): void {
    this.dataService.getSchools().subscribe(data => this.schools = data, error => console.log(error));
  }

  saveName(name: string) {
    this.name = name;
  }
  ngOnInit() {
    this.setJobs();
    this.setSchools();
  }
}
