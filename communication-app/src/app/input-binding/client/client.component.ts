import {Cliente} from './../cliente.model';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() cliente: Cliente;

  constructor() {
  }

  ngOnInit(): void {
  }

}
