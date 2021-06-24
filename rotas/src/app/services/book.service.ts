import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Book } from './../models/book';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000).subscribe(
      () => this.bookSubject$.next(
        [
          { title: 'Book1', pages: 200, authors: ['john', 'nicole'] },
          { title: 'Book2', pages: 100, authors: ['mily'] },
          { title: 'Book1', pages: 300, authors: ['fred'] },
          { title: 'Book1', pages: 130, authors: ['paul', 'john'] },
        ]))
  }

  add(b: Book){
    let books = this.bookSubject$.getValue().push(b);
    // books.push(b);
  }

  remove(i: number){
    let books = this.bookSubject$.getValue();
    if(i>=0 && i < books.length){
      books.splice(i, 1);
    }
  }

  get(i: number) : Observable<Book> {
    return this.books$.pipe(
      map(books => (i>=0 && i < books.length) ? books[i] : null),
      delay(1000)
    )
  }

}
