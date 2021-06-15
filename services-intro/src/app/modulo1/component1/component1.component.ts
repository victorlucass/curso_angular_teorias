import {Component, OnInit} from '@angular/core';
import {Service1Service} from 'src/app/services/service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  n: number = 0;

  constructor(private service1: Service1Service) {
    this.n = service1.num;
  }

  ngOnInit(): void {
  }

}
