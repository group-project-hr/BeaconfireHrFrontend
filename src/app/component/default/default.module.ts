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
import { ApplicationFormComponent } from './component/application-form/application-form.component';
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { VerifyTokenComponent } from './component/verify-token/verify-token.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { CommonModule } from '@angular/common';
import { HousingComponent } from './component/housing/housing.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VisaComponent } from './component/visa/visa.component';
import { UserFilesListComponent } from './component/user-files-list/user-files-list.component';
import { UserStatusManagementComponent } from './component/user-status-management/user-status-management.component';
import { LoginComponent } from './component/login/login.component';
import { MainNavigationComponent } from './component/main-navigation/main-navigation.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HouseManagementComponent } from './component/house-management/house-management.component';

@NgModule({
  declarations: [
    DownloadFileComponent,
    MainNavigationComponent,
    HomePageComponent,
    GenerateTokenComponent,
    HousingComponent,
    OnboardingComponent,
    RegistrationComponent,
    LoginComponent,
    GenerateTokenComponent,
    RegistrationComponent,
    ApplicationFormComponent,
    UploadFileComponent,
    VerifyTokenComponent,
    VisaComponent,
    UserFilesListComponent,
    UserFilesListComponent,
    UserStatusManagementComponent,
    DefaultComponent,
  ],
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
    NzSelectModule,

    PdfViewerModule,
    NzCollapseModule,
    NzTimePickerModule,
    NzTypographyModule,
    NzInputModule,
    NzDescriptionsModule,
  ],
  providers: [],
})
export class DefaultModule {}
