import { Department } from './../model/department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  readonly url = 'api/departments';
  private departmentsSubjects$ = new BehaviorSubject<Department[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) {}

  get(): Observable<Department[]> {
    this.http
      .get<Department[]>(this.url)
      .pipe(tap((deps) => console.log(deps)))
      .subscribe(this.departmentsSubjects$);

    return this.departmentsSubjects$.asObservable();
  }

  add(d: Department): Observable<Department> {
    return this.http
      .post<Department>(this.url, d)
      .pipe(
        tap((dep: Department) => this.departmentsSubjects$.getValue().push(dep))
      );
  }
}
