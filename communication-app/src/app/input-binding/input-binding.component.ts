import { Cliente } from './cliente.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css'],
})
export class InputBindingComponent implements OnInit {
  @Input() name: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Cliente[];

  constructor() {
    this.clients = [
      {
        id: 1,
        name: 'Bob',
        age: 30,
      },
      {
        id: 2,
        name:'Lucas',
        age:15
      },
      {
        id:3,
        name:'Mércia',
        age: 45
      }
    ];
  }

  ngOnInit(): void {}
}
