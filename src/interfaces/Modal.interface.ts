import * as zod from "zod";

export interface UpdateProductFormData {
  id: string;
  name?: string;
  price?: number;
  description?: string;
}

export interface UpdateModalProps {
  id: string;
  name: string;
  price: number;
  description: string;
  toggleModal: () => void;
  fetchProducts: () => void;
}

export const updateFormValidationSchema = zod.lazy(() =>
  zod.object({
    id: zod.string(),
    name: zod.string().optional(),
    price: zod.number().optional(),
    description: zod.string().optional(),
  }).refine(data => Object.values(data).some((value) => value !== null && value !== undefined), {
    message: 'At least one field must be filled',
  })
);

export type UpdateFormData = zod.infer<typeof updateFormValidationSchema>;

