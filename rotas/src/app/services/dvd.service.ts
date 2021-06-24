import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  private dvd$ = this.dvdSubject.asObservable();
  constructor() {
    timer(2000).subscribe(() => {
      this.dvdSubject.next([
        { title: 'DVD - Beegees', year: 2016, genre: 'Music' },
        { title: 'The wind', year: 2018, genre: 'Movie' },
      ])
    })
  }

  add(b: Dvd){
    let books = this.dvdSubject.getValue() .push(b);
    // books.push(b);
  }

  remove(i: number){
    let books = this.dvdSubject.getValue();
    if(i>=0 && i < books.length){
      books.splice(i, 1);
    }
  }

  get(i: number) : Observable<Dvd> {
    return this.dvd$.pipe(
      map(dvd => (i>=0 && i < dvd.length) ? dvd[i] : null),
      delay(1000)
    )
  }

}
