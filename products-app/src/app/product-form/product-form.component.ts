import {Component, OnInit} from '@angular/core';
import {Departament} from '../models/department.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  department: Departament;
  price: number;
  description: string;

  departments: Departament[];

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {

  }

  clear() {

  }

}
