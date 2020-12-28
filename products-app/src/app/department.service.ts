import { Injectable } from '@angular/core';
import { Departament } from './models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  department: Departament[] = [
    { id:1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Computers' }
  ];

  constructor() {}

  getDepartments(): Departament[] {
     return this.department;
  }

  addDepartments(d: Departament){
    this.department.push(d);
    console.log(this.department);
  }
}
