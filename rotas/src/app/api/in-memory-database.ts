import { Book } from './../models/book';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Dvd } from "../models/dvd";

export class InMemoryDatabase implements InMemoryDbService {

  createDb(): any {
    const dvds: Dvd[] = [
      { title: 'DVD - Beegees', year: 2016, genre: 'Music' },
      { title: 'The wind', year: 2018, genre: 'Movie' },
    ]

    const books: Book[] = [

    ]

    return { dvds };

  }

}