import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {


  @Input() name = '';
  nameBefore = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    // if (changes.hasOwnProperty('name')) {
    //   this.nameBefore = changes['name'].previousValue;
    // }
    console.log(changes);
  }

}
