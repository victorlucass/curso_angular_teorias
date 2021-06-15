import { Produto } from "./produtos";

export interface Categoria {
  _id?: string;
  name: string;
  produtos:Produto[];
}
