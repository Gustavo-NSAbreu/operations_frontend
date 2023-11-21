import axios from "axios";
import { Product } from "../interfaces/App.interface";
import { ProductFormData } from "../interfaces/Form.interface";

export async function getProducts(): Promise<Product[]> {
  const { data } = await axios.get<Product[]>("http://localhost:8000/api/v1/product");
  return data;
}

export async function registerProduct(product: ProductFormData): Promise<void> {
  await axios.post<ProductFormData>("http://localhost:8000/api/v1/product", product);
}

export async function updateProduct( product: ProductFormData): Promise<void> {
  await axios.put<ProductFormData>(`http://localhost:8000/api/v1/product`, product);
}

export async function deleteProduct(id: string): Promise<void> {
  await axios.delete(`http://localhost:8000/api/v1/product/${id}`);
}