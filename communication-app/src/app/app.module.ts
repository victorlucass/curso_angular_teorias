import {MaterialModule} from './material/material.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputBindingComponent} from './input-binding/input-binding.component';
import {ClientComponent} from './input-binding/client/client.component';
import {EventComponent} from './event/event.component';
import {ChildItemComponent} from './event/child-item/child-item.component';
import {ClientsComponent} from './clients/clients.component';
import {FormsModule} from '@angular/forms';
import {ItemCLientComponent} from './clients/item-client/item-client.component';
import {ParentChildComponent} from './parent-child/parent-child.component';
import {TimerComponent} from './parent-child/timer/timer.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import {NameChangesComponent} from "./ng-on-changes/name-changes/name-changes.component";


@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemCLientComponent,
    ParentChildComponent,
    TimerComponent,
    NgOnChangesComponent,
    NameChangesComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
