import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CvComponent } from './cv.component';
import { CvPageComponent } from './cv-page/cv.page.component';
import { CvSidebarComponent } from './cv-sidebar/cv-sidebar.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { CvDataService } from './cv-data.service';


@NgModule({
  declarations: [
    CvComponent,
    CvPageComponent,
    CvSidebarComponent,
    CvContentComponent
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
