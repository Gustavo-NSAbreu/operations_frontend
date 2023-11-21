import { Product } from "./App.interface";

export interface TableProps {
  products: Product[];
  fetchProducts: () => void;
}
