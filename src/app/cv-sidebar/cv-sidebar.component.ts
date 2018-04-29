import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../cv-data.service';
import { ContactInfo } from '../contact-info';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'cv-sidebar',
  templateUrl: './cv-sidebar.component.html',
  styleUrls: ['./cv-sidebar.component.css']
})

export class CvSidebarComponent implements OnInit {
  // Temporary
  avatarUploaded = false;
  url?: string;

  constructor(private dataService: CvDataService) { }

  setAvatar(): void {
    if (this.avatarUploaded === false) {
      this.dataService.getAvatar().subscribe(url => this.url = url, error => console.log(error));
      this.avatarUploaded = true;
      console.log('Received avatar');
    } else {
      console.log('Couldn\'t receive avatar');
    }
  }
  ngOnInit() {
    // this.setAvatar();
  }

}
