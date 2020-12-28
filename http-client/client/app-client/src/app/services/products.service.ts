import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/products`);
  }
}
