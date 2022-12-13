import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { ShowListComponent } from './component/show-list/show-list.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {PdfViewerComponent} from "./component/pdf-viewer/pdf-viewer.component";
import { VisaComponent } from './component/visa/visa.component';
import { UserFilesListComponent } from './component/user-files-list/user-files-list.component';
import {UserFilesService} from "./service/user-files.service";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    OnboardingComponent,
    ShowListComponent,
    PdfViewerComponent,
    VisaComponent,
    UserFilesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzUploadModule,
    PdfViewerModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    UserFilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
