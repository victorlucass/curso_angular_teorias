import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.scss'],
})
export class BasicCreationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  observableCreate() {
    const obs = new Observable((observer: Observer<string>) => {
      observer.next('Olá!');
      observer.next('my');
      observer.next('from');
      observer.next('Observable');
      observer.complete();
    });
    obs.subscribe((resource: string) => {
      console.log(resource);
    });
  }
}
