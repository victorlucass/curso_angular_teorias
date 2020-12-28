import { Departament } from "./department.model";

export interface Product {
  id:number,
  prince: number,
  description: string;
  department: Departament;
}
