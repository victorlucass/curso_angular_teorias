import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    'Victor Lucas',
    'João Matheus',
    'Maria Andrade',
    'Tom Brady'
  ];

  cities = [
    {
      name: 'Manaus', state: 'AM'
    },
    {
      name: 'São Paulo', state: 'SP'
    },
    {
      name: 'Maranhão', state: 'MR'
    },
    {
      name: 'Pará', state: 'PR'
    },
    {
      name: 'Rio de janeiro', state: 'RJ'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
