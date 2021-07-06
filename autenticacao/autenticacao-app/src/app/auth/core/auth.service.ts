import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const URL_BASE = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject$: BehaviorSubject<User> = new BehaviorSubject(null);
  private loggedSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { }

  register(user: User): Observable<User> {
    return this._http.post<User>(`${URL_BASE}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this._http.post<User>(`${URL_BASE}/login`, credentials).pipe(
      tap((u: User) => {
        localStorage.setItem('token', u.token);
        this.userSubject$.next(u);
        this.loggedSubject$.next(true);
        // console.log(this.userSubject$.value)
      }
      ));
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedSubject$.next(false);
    this.userSubject$.next(null);
  }

  isAuthenticated(): Observable<boolean> {
    return this.loggedSubject$.asObservable();
  }

  getUser(): Observable<User> {
    return this.userSubject$.asObservable();
  }

}
