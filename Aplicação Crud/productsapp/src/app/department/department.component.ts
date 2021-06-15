import {Component, OnInit} from '@angular/core';
import {Department} from '../model/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string;
  departments: Department[] = [
    {name: 'dep 01', _id: '1'},
    {name: 'dep 01', _id: '1'},
    {name: 'dep 01', _id: '1'},
    {name: 'dep 01', _id: '1'},
    {name: 'dep 01', _id: '1'}
  ];

  constructor(
    private departmentService: DepartmentService
  ) {
  }

  ngOnInit(): void {
  }

  save() {
  }

  cancel() {

  }

  delete(dep: Department) {

  }

  update(dep: Department) {

  }


}
