import * as zod from "zod";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const registrationFormValidationSchema = zod.object({
  name: zod.string().min(1, { message: "Name must have at least 1 characters" }),
  price: zod.number().min(0.01, { message: "Price must be greater than 0" }),
  description: zod.string().min(1, { message: "Description must have at least 1 characters" })
});

export type RegistrationFormData = zod.infer<typeof registrationFormValidationSchema>;
