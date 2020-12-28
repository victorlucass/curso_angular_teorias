import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';



@NgModule({
  declarations: [Component3Component, Component4Component],
  imports: [
    CommonModule
  ],
  exports: [
    Component3Component, Component4Component
  ]
})
export class Modulo2Module { }
