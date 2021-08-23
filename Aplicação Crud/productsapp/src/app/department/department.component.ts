import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  depName: string;
  departments: Department[] = [];
  department = new Department();
  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.get().subscribe((resources: Department[]) => {
      this.departments = resources;
      // console.log(resources);
    });
  }

  save() {
    this.departmentService.add(this.department).subscribe(
      (dep) => {
        console.log(dep);
      },
      (erro) => {
        console.log(erro);
      }
    );
    console.log(this.department);
  }

  cancel() {}

  delete(dep: Department) {}

  update(dep: Department) {}
}
