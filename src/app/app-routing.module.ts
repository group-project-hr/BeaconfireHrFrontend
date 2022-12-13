import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './component/housing/housing.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';

const routes: Routes = [
  { path: 'employee/onboarding', component: OnboardingComponent },
  { path: 'employee/housing', component: HousingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
