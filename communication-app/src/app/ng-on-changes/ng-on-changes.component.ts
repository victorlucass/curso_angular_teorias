import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit {
  name = '';
  newName = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.newName = this.name;
  }

}
