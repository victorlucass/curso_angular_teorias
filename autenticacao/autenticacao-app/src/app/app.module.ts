import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/core/interceptions/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    MaterialModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
