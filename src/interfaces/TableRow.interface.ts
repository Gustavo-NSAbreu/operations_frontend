import { Product } from "./App.interface";

export interface TableRowProps {
  id: string;
  name: string;
  price: number;
  description: string;
  showModal: (product: Product) => void;
}