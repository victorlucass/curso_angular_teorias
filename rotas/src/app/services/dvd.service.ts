import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Dvd } from '../models/dvd';
@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<Dvd[]> {
    return this._http.get<any>('api/dvds');
  }

  getById(id: any): Observable<Dvd> {
    return this._http.get<any>('api/dvds/' + id);
  }

  create(resource: Dvd): Observable<Dvd> {
    return this._http.post<any>('api/dvds', resource);
  }

  remove(id: any): Observable<any>{
    return this._http.delete<any>(`api/dvds/${id}`);
  }

}
