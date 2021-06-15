import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Clients} from '../clients.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemCLientComponent implements OnInit {

  @Input() client: Clients;

  @Output() updateClient = new EventEmitter<Clients>();
  @Output() removeClient = new EventEmitter<any>();

  onEdit: boolean = false;
  name: string;
  age: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove() {
    this.removeClient.emit();
  }

  save() {
    this.onEdit = false;
    this.updateClient.emit(
      {name: this.name, age: this.age}
    );
  }

}
