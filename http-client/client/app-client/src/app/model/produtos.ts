import { Categoria } from "./categoria";

export interface Produto{
    _id ?: number;
    name: string;
    price: number;
    categoria:Categoria[];
}