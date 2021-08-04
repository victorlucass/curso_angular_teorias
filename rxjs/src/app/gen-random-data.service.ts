import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';
import { publish } from 'rxjs/operators';
export interface DataModel {
  timestamp: number;
  data: number;
}

@Injectable({
  providedIn: 'root',
})
export class GenRandomDataService {
  public dataObservable: ConnectableObservable<DataModel>;
  constructor() {
    this.dataObservable = new Observable((observer: Observer<DataModel>) => {
      let i = 0;
      console.log('Observable create!');
      let f = () => {
        i++;
        console.log(i);
        if (i <= 10) {
          let timestamp = Math.round(Math.random() * 2000 + 500);
          observer.next({ timestamp: timestamp, data: i });
          setTimeout(f, timestamp);
        } else {
          observer.complete();
        }
      };
      f();
    }).pipe(publish()) as ConnectableObservable<DataModel>;
  }
}
