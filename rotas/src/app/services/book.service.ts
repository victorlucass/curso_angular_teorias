import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this._http.get<any>('api/books');
  }

  getById(id: any): Observable<Book> {
    return this._http.get<any>('api/books/' + id);
  }

  remove(id: any): Observable<any> {
    return this._http.delete<any>('api/books/' + id);
  }


}
