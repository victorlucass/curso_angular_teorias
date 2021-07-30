import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let s: Subject<number> = new Subject<number>();
    s.subscribe((n) => console.log(n));
    for (let i = 1; i < 5; i++) {
      s.next(i);
    }
  }
}
