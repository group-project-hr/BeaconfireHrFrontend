import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/default/component/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component/default/default.module').then((m) => m.DefaultModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
