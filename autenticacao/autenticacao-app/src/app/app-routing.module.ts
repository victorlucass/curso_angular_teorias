import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/people' },
  {
    path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [
      AuthGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
