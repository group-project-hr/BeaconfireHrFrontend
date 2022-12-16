import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './component/housing/housing.component';
import { InternalServerComponent } from './component/errors/internal-server/internal-server.component';
import { OnboardingComponent } from './component/onboarding/onboarding.component';
import { UnauthorizedAccessComponent } from './component/errors/unauthorized-access/unauthorized-access.component';

const routes: Routes = [
  { path: 'employee/onboarding', component: OnboardingComponent },
  { path: 'employee/housing', component: HousingComponent },
  { path: '500', component: InternalServerComponent },
  { path: '401', component: UnauthorizedAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
