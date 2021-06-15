import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = 'Digite 01';
  name2: string = 'Digite 02';

  cliente = {
    name: 'Victor Lucas',
    lastName: 'Oliveira',
    age: 19,
    address: ""
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
