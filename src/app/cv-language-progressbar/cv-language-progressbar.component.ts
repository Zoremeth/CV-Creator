import { Component, OnInit } from '@angular/core';
import { Languages } from '../contact-info';
import { CvDataService } from '../cv-data.service';

@Component({
  selector: 'cv-language-progressbar',
  templateUrl: './cv-language-progressbar.component.html',
  styleUrls: ['./cv-language-progressbar.component.css']
})
export class CvLanguageProgressbarComponent implements OnInit {
  languages?: Languages[];
  numbers: Number[] = [];
  constructor(private dataService: CvDataService) { this.numbers = Array(10).fill(0).map((x, i) => i); }

  setLanguages(): void {
    this.dataService.getLanguages().subscribe(data => this.languages = data, error => console.log(error));
  }

  ngOnInit() {
    this.setLanguages();
  }

}
