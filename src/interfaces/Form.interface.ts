export interface ProductFormData {
  name: string;
  price: number;
  description: string;
}

export interface UpdateProductFormData {
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
}