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
  constructor() {
  }

  // [
  //   { title: 'Book1', pages: 200, authors: ['john', 'nicole'] },
  //   { title: 'Book2', pages: 100, authors: ['mily'] },
  //   { title: 'Book1', pages: 300, authors: ['fred'] },
  //   { title: 'Book1', pages: 130, authors: ['paul', 'john'] },
  // ]
}
