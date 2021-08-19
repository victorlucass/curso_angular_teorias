import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';



@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HelloWorldModule { }
