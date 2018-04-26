import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { Jobs } from '../contact-info';

@Component({
  selector: ' cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css']
})
export class CvContentComponent implements OnInit {

  jobs?: Jobs[];

  constructor(private dataService: CvDataService) { }
  setJobs(): void {
    this.dataService.getJobs().subscribe(data => this.jobs = data, error => console.log(error));
  }

  ngOnInit() {
    this.setJobs();
  }

}
