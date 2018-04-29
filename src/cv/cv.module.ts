import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CvComponent } from './cv.component';
import { CvPageComponent } from './cv-page/cv.page.component';
import { CvSidebarComponent } from './cv-sidebar/cv-sidebar.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { CvDataService } from './cv-data.service';
import { CvPersonalInfoComponent } from './cv-personal-info/cv.personal-info.component';


@NgModule({
  declarations: [
    CvComponent,
    CvPageComponent,
    CvSidebarComponent,
    CvContentComponent,
    CvPersonalInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CvDataService,
  ],
  bootstrap: [CvComponent]
})
export class CvModule { }
