import axios from "axios";
import { Product } from "../interfaces/App.interface";
import { ProductFormData } from "../interfaces/Form.interface";
import { UpdateProductFormData } from "../interfaces/Modal.interface";

const API_URL = "http://localhost:8000/api/v1/product";

export async function getAll(): Promise<Product[]> {
  const { data } = await axios.get<Product[]>(`${API_URL}`);
  return data;
}

export async function create(product: ProductFormData): Promise<void> {
  await axios.post<ProductFormData>(`${API_URL}`, product);
}

export async function update( product: UpdateProductFormData): Promise<void> {
  await axios.put<ProductFormData>(`${API_URL}`, product);
}

export async function kill(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}