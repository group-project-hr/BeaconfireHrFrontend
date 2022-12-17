import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgModule } from '@angular/core';
import { DownloadFileComponent } from './component/download-file/download-file.component';
import { GenerateTokenComponent } from './component/generate-token/generate-token.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { VerifyTokenComponent } from './component/verify-token/verify-token.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DownloadFileComponent,
    GenerateTokenComponent,
    OnboardingComponent,
    RegistrationComponent,
    GenerateTokenComponent,
    RegistrationComponent,
    ApplicationFormComponent, UploadFileComponent, VerifyTokenComponent,
  DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FormsModule,
    NzUploadModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzRadioModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzSelectModule
  ],
  providers: [],
})
export class DefaultModule { }
