import { Component, OnInit } from '@angular/core';
import { Clients } from './clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Clients[] = [];
  name:string;
  age:number;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push(
      {
        name: this.name,
        age: this.age
      }
    );
    this.name = '';
    this.age = 0;
  }

  deleteCliente(i){
    this.clients.splice(i,1);
  }

  updateClient(client: Clients, i:number) {
    this.clients[i].name = client.name;
    this.clients[i].age = client.age;
  }

}
