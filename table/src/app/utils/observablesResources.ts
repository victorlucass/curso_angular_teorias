import {OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {AlunoModel} from '../entities/aluno.model';
import {EscolaModel} from "../entities/escola.model";

export abstract class TableObservableResources {
  protected alunosResources = new Observable<AlunoModel[]>(
    (observer: Observer<AlunoModel[]>) => {
      const escola1 = new EscolaModel(1, "Dom Bosco - Centro")
      const aluno1 = new AlunoModel(1, "Victor", "Amazonas", "Manaus", escola1);

      const escola2 = new EscolaModel(2, "Fametro");
      const aluno2 = new AlunoModel(2, "João", "Maranhão", "São Luís", escola2);

      const allAlunos: AlunoModel[] = [
        aluno1,
        aluno2
      ]
      observer.next(allAlunos);
    }
  );
}
