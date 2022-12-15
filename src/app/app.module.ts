import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ApplicationFormComponent } from './component/application-form/application-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UserStatusManagementComponent } from './component/user-status-management/user-status-management.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    OnboardingComponent,
    DownloadFileComponent,
    OnboardingComponent,
    ShowListComponent,
    PdfViewerComponent,
    VisaComponent,
    UserFilesListComponent,
    DownloadFileComponent,
    ApplicationFormComponent,
    UserStatusManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzUploadModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzSelectModule,
    NzButtonModule,
    PdfViewerModule,
    NzCollapseModule,
    NzDescriptionsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    UserFilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
