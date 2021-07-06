import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/interceptions/auth.interceptor';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {

  //Esse método é para exportar tanto o modulo quanto o interceptor.
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthInterceptor
      ]
    }
  }

}
