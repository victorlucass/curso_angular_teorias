import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showName:boolean = true;
  showAddress:boolean = true;
  showPhone:boolean = true;
  showAge:boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
