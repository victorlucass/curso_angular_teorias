import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from "./api/in-memory-database";
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
