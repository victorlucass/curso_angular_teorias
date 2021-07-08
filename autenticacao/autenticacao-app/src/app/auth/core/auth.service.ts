import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly url = 'http://localhost:3000/auth';

  private userSubject$: BehaviorSubject<User> = new BehaviorSubject(null);
  private loggedSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { }

  register(user: User): Observable<User> {
    return this._http.post<User>(`${this.url}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this._http.post<User>(`${this.url}/login`, credentials).pipe(
      tap((u: User) => {
        localStorage.setItem('token', u.token);
        this.loggedSubject$.next(true);
        this.userSubject$.next(u);
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
    const token = localStorage.getItem('token');
    if (token && !this.loggedSubject$.value) {
      return this.checkTokenValidation();
    }
    return this.loggedSubject$.asObservable();
  }

  getUser(): Observable<User> {
    return this.userSubject$.asObservable();
  }

  checkTokenValidation(): Observable<boolean> {
    return this._http.get<User>(`${this.url}/user`)
      .pipe(
        tap(
          (u: User) => {
            if (u) {
              localStorage.setItem('token', u.token);
              this.loggedSubject$.next(true);
              this.userSubject$.next(u);
            }
          }
        ),
        map(
          (u: User) => (u) ? true : false
        ),
        catchError(
          (error) => {
            this.logout();
            return of(false);
          }
        )
      )
  }

}
