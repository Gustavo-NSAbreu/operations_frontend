import { Product } from "./App.interface";

export interface TableProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
