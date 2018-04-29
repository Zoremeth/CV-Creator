import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { ContactInfo } from '../contact-info';

@Component({
  selector: 'cv-personal-info',
  templateUrl: './cv.personal-info.component.html',
  styleUrls: ['./cv.personal-info.component.css']
})
export class CvPersonalInfoComponent implements OnInit {
  items: ContactInfo[] = [];

  getItems(): void {
    this.items = this.dataService.items;
  }

  constructor(private dataService: CvDataService) { }

  ngOnInit() {
    this.getItems();
  }

}
