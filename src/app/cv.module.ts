import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CvComponent } from './cv.component';
import { CvPageComponent } from './cv-page/cv.page.component';
import { CvSidebarComponent } from './cv-sidebar/cv-sidebar.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { CvDataService } from './cv-data.service';
import { CvPersonalInfoComponent } from './cv-personal-info/cv.personal-info.component';
import { CvLanguageProgressbarComponent } from './cv-language-progressbar/cv-language-progressbar.component';
import { CvHeadersComponent } from './cv-headers/cv-headers.component';
import { FormsModule } from '@angular/forms';
import { CvInlineEditorComponent } from './cv-inline-editor/cv-inline-editor.component';


@NgModule({
  declarations: [
    CvComponent,
    CvPageComponent,
    CvSidebarComponent,
    CvContentComponent,
    CvPersonalInfoComponent,
    CvLanguageProgressbarComponent,
    CvHeadersComponent,
    CvInlineEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    CvDataService,
  ],
  bootstrap: [CvComponent]
})
export class CvModule { }
