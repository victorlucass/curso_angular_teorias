import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlunosListComponent} from "./alunos-list/alunos-list.component";
import {MaterialModule} from "../../material/material.module";


@NgModule({
  declarations: [
    AlunosListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AlunosListComponent
  ]
})
export class AlunosModule {
}
