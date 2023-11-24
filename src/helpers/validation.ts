import { UpdateProductFormData } from "../interfaces/Modal.interface";

export function validateData(data: UpdateProductFormData, name: string, price: number, description: string) {
  if(data.name === undefined || data.name === null || data.name === "") {
    data.name = name;
  }
  if(data.price === undefined || data.price === null || data.price === 0 || Number.isNaN(data.price) ) {
    data.price = price;
  }
  if(data.description === undefined || data.description === null || data.description === "") {
    data.description = description;
  }
  return data;
}
