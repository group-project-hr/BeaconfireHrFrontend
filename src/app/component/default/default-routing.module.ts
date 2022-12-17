import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/service/login.guard';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { HousingComponent } from './component/housing/housing.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { VerifyTokenComponent } from './component/verify-token/verify-token.component';
import { DefaultComponent } from './default.component';



const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'test', component: OnboardingComponent },
      { path: 'verifytoken', component: VerifyTokenComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'application-form', component: ApplicationFormComponent },
      { path: 'employee/housing', component: HousingComponent },
      {
        path: '**', redirectTo: "/login"
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
