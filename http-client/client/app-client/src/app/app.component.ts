import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './model/categoria';
import {ProductsService} from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  simpleRequestObservable: Observable<Categoria[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
  }
  
  getSimpleHttpRequest(){
    this.simpleRequestObservable = this.productsService.getCategorias();
  }
}
