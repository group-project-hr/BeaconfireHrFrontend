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
import { HousingComponent } from './component/housing/housing.component';
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ApplicationFormComponent } from './component/application-form/application-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UnauthorizedAccessComponent } from './component/errors/unauthorized-access/unauthorized-access.component';
import { InternalServerComponent } from './component/errors/internal-server/internal-server.component';
import { HouseManagementComponent } from './component/house-management/house-management.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    OnboardingComponent,
    HousingComponent,
    DownloadFileComponent,
    ApplicationFormComponent,
    UnauthorizedAccessComponent,
    InternalServerComponent,
    HouseManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzUploadModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzSelectModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
