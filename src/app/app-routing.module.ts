import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import {PdfViewerComponent} from "./component/pdf-viewer/pdf-viewer.component";
import {VisaComponent} from "./component/visa/visa.component";
import {UserFilesListComponent} from "./component/user-files-list/user-files-list.component";
import {UserStatusManagementComponent} from "./component/user-status-management/user-status-management.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent }, {
    path: '', loadChildren: () => import('./component/default/default.module').then(m => m.DefaultModule)
  },
  { path: 'employee/onboarding', component: OnboardingComponent },
  { path: 'visa/file/preview', component: PdfViewerComponent},
  { path: 'visa', component: VisaComponent},
  { path: 'visa/user/fileslist', component: UserFilesListComponent},
  { path: 'hr/user_status_management', component: UserStatusManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
