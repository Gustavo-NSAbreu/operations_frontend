export interface RegistrationFormProps {
  createProduct: (data: ProductFormData) => void;
}

export interface ProductFormData {
  name: string;
  price: number;
  description: string;
}
