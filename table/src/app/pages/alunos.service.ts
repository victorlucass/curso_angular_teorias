import {Injectable} from '@angular/core';
import {TableObservableResources} from "../utils/observablesResources";
import {Subscription} from "rxjs";
import {AlunoModel} from "../entities/aluno.model";

@Injectable({
  providedIn: 'root'
})
export class AlunosService extends TableObservableResources {

  alunos!: AlunoModel[];

  constructor() {
    super();
  }

  findAll(): any {
    this.alunosResources.subscribe(
      (alunosResources: AlunoModel[]) => {
        this.alunos = alunosResources;
      });
    return this.alunos;
  }
}
