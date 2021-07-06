import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
import { Product } from './product';
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this._http.get<any>(`${this.url}/people`).pipe(
      // tap(p => console.log(p)),
      catchError((e) => {
        return throwError(e);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<any>(`${this.url}/products`).pipe(
      // tap(p => console.log(p)),
      catchError((e) => {
        return throwError(e);
      })
    );;
  }

}
