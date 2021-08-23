import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

export interface Department {
  id: number | string;
  name: string;
}

export interface Product {
  name: string;
  stock: number;
  price: number;
  department: Department;
}

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const departments: Department[] = [
      { id: 1, name: 'DEP 1' },
      { id: 2, name: 'DEP 2' },
      { id: 3, name: 'DEP 3' },
      { id: 4, name: 'DEP 4' },
    ];
    return { departments };
  }
}

// api/:nome
