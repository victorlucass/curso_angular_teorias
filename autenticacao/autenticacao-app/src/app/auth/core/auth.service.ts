import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(user: User): Observable<User> {
    return this._http.post<User>(`${URL_BASE}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this._http.post<User>(`${URL_BASE}/login`, credentials);
  }

}
