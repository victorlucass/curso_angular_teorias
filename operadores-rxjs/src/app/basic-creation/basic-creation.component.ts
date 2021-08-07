import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, Observer, of, Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.scss'],
})
export class BasicCreationComponent implements OnInit {

  sub : Subscription;

  constructor() {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
  }

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
    // @ts-ignore
    this.sub.add(obs);
  }

  fromClick() {
    //Modo 1
    from([1, 2, 3, 4, {x: 10, y: 15}]).subscribe((v) => {
      console.log(v)
    });
    //Modo 2
    const myFrom = from(['Olá', 'Mundo', 'angular!']);
    myFrom.subscribe((v) => console.error(v));
    myFrom.subscribe((v) => console.warn(v));
  }

  ofClick() {
    const subs = of([1, 2, 3, 4, 5, {x: 10, y: 20}]).subscribe((v) => console.log(v));
    this.sub.add(subs);
  }

  intervalClick() {
    const numbers = interval(1000);
    const subs = numbers.subscribe(
      (x: number) => {
        console.log("Next " + x);
      }
    )
    this.sub.add(subs);
  }

  timerClick(){
    const source = timer(5000, 1000);
    const subs = source.subscribe(
      (resources : number) => {
        console.log(resources);
      }
    )
    this.sub.add(subs);
  }

  unsubscribeClick(){
    this.sub.unsubscribe();
  }
}
