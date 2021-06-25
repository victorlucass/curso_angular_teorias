import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  _books: Book[] = [];

  constructor(private _service: BookService) { }

  ngOnInit(): void {
    this._service.getAll().subscribe(
      (resource) => {
        this._books = resource;
      }
    )
  }

}
