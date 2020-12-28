import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  providers: [ Service1Service ]
})
export class Component2Component implements OnInit {

  n: number = 0;
  constructor( private service1: Service1Service ) {
    this.n = service1.num;
  }
  ngOnInit(): void {
  }

}
