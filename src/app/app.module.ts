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

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    OnboardingComponent,
    HousingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzUploadModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
