import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: 'bob', role: 'admin', lastlogin: new Date('2/1/2020')},
    {login: 'lia', role: 'user', lastlogin: new Date('4/30/2020')},
    {login: 'john', role: 'admin', lastlogin: new Date('2/23/2020')},
    {login: 'robin', role: 'user', lastlogin: new Date('2/20/2020')},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
