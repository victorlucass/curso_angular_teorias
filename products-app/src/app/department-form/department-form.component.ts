import {DepartmentService} from './../department.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  depName: string;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.departmentService.addDepartments({
      name: this.depName
    });
    this.clear();
  }

  clear() {
    this.depName = '';
  }

}
