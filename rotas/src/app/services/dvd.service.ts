import { HttpClient } from '@angular/common/http';
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

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<Dvd[]> {
    return this._http.get<any>('api/dvds');
  }

}
