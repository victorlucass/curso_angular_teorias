import {EscolaModel} from './escola.model';

export class AlunoModel {
  id!: number;
  nome!: string;
  estado!: string;
  cidade!: string;
  escola!: EscolaModel;

  constructor(id: number, nome: string, estado: string, cidade: string, escola: EscolaModel) {
    this.id = id;
    this.nome = nome;
    this.estado = estado;
    this.cidade = cidade;
    this.escola = escola;
  }

}
