import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formControl = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  readonly FIELDS = 'name,description,version,homepage';
  results$: Observable<any> | any;
  total: number | any = 0;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.results$ = this.formControl.valueChanges.pipe(
      map(result => result.trim()), //remove os espaços;
      filter(result => result.length > 1), //faz as pesquisa apartir desta condição;
      debounceTime(200), // É um pequeno delay, isso para não ficar fazendo requisição para cada tecla; 
      distinctUntilChanged(), //Só irá continuar se mudar o valor, ou seja, não fica repetindo. 
      // tap(result => console.log(result)), // Mostra o resultado;
      switchMap(value => this._http.get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.FIELDS
        }
      })),
      tap((result: any) => this.total = result.total),
      map((result) => result.results)
    );
  }

  search() {
    //   let value = this.formControl.value;
    //   const fields = 'name,version'
    //   let params_ = {
    //     search: value,
    //     fields: fields
    //   }

    //   let params = new HttpParams();
    //   params = params.set('search', value);
    //   params = params.set('fields', fields);

    //   if (value && (value = value.trim()) !== '') {
    //     this.results$ = this._http.get(this.SEARCH_URL, { params }).pipe(
    //       tap((resul: any) => this.total = resul.total),
    //       map((result: any) => result.results)
    //     );
    //   }
    //   console.log(this.formControl.value);
  }

}
