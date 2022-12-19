import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { LoginGuard } from 'src/app/service/login.guard';
import { ApplicationFormComponent } from './component/application-form/application-form.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HousingComponent } from './component/housing/housing.component';
import { LoginComponent } from './component/login/login.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { UserFilesListComponent } from './component/user-files-list/user-files-list.component';
import { UserStatusManagementComponent } from './component/user-status-management/user-status-management.component';
import { VerifyTokenComponent } from './component/verify-token/verify-token.component';
import { VisaComponent } from './component/visa/visa.component';
import { DefaultComponent } from './default.component';
import { HouseManagementComponent } from './component/house-management/house-management.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'test', component: OnboardingComponent },
      { path: 'verifytoken', component: VerifyTokenComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'application-form', component: ApplicationFormComponent },
      { path: 'employee/housing', component: HousingComponent },
      { path: 'employee/visa/file/preview', component: PdfViewerComponent },
      { path: 'employee/visa', component: VisaComponent },
      {
        path: 'employee/visa/user/fileslist',
        component: UserFilesListComponent,
      },
      {
        path: 'hr/user_status_management',
        component: UserStatusManagementComponent,
      },
      { path: 'employee/housing', component: HousingComponent },
      { path: 'hr/house-management', component: HouseManagementComponent },
      { path: '**', redirectTo: '/login' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
