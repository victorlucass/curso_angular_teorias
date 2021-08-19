import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AlunosService} from "../../alunos.service";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {AlunoModel} from "../../../entities/aluno.model";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent implements OnInit, AfterViewInit {
  alunos: AlunoModel[] = this.service.findAll();

  displayedColumns: string[] = ['id', 'nome', 'estado', 'cidade', 'escola'];
  dataSource = new MatTableDataSource<AlunoModel>(this.alunos);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: AlunosService) {
  }

  ngOnInit(): void {
    console.log(this.alunos)
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
