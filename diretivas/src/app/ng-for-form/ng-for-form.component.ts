import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name:string = '';
  address:string = '';
  phone:string = '';
  city:string = '';
  age:number = 0;

  cities = [
    {
      name: 'Manaus', state:'AM'
    },
    {
      name: 'São Paulo', state:'SP'
    },
    {
      name: 'Maranhão', state:'MR'
    },
    {
      name: 'Pará', state:'PR'
    },
    {
      name: 'Rio de janeiro', state:'RJ'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
