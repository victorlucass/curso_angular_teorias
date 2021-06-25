import { Book } from './../models/book';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Dvd } from "../models/dvd";

export class InMemoryDatabase implements InMemoryDbService {

  createDb(): any {
    const dvds: Dvd[] = [
      { id : 1, title: 'DVD - Beegees', year: 2016, genre: 'Music' },
      { id: 2, title: 'The wind', year: 2018, genre: 'Movie' },
    ]

    const books: Book[] = [
      { id: 1, title: 'Book1', pages: 200, authors: ['john', 'nicole'] },
      { id: 2, title: 'Book2', pages: 100, authors: ['mily'] },
      { id: 3, title: 'Book1', pages: 300, authors: ['fred'] },
      { id: 4, title: 'Book1', pages: 130, authors: ['paul', 'john'] }
    ]

    return { dvds, books };

  }

}
