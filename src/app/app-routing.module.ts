import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { VerifyTokenComponent } from './component/verify-token/verify-token.component';

const routes: Routes = [
  { path: 'employee/onboarding', component: OnboardingComponent },
  { path: 'auth/verifytoken', component: VerifyTokenComponent },
  { path: 'auth/registration', component: RegistrationComponent },
  { path: 'auth/login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
