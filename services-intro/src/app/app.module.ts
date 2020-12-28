import { Modulo2Module } from './modulo2/modulo2.module';
import { Modulo1Module } from './modulo1/modulo1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Modulo1Module,
    Modulo2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
