import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Table from "./components/Table";
import { Product, RegistrationFormData, registrationFormValidationSchema } from "./interfaces/App.interface";
import { getProducts, registerProduct } from "./api/api";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function App() {

  const [products, setProducts] = useState<Product[]>([])

  const registrationForm = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormValidationSchema),
    defaultValues: {
      name: "",
      price: 0.0,
      description: ""
    }
  });

  async function fetchProducts() {
    const allProducts = await getProducts();
    setProducts(allProducts);
  }

  const { handleSubmit, reset } = registrationForm;

  async function createProduct(data: RegistrationFormData) {
    await registerProduct(data);
    fetchProducts();
    reset();
  }

  return (
    <body className="h-screen bg-gray-900 text-slate-50 flex flex-col items-center content-center p-8">
      <h1 className="text-2xl my-8">CRUD Operations</h1>
      <section className="w-[37rem] flex flex-col gap-4 bg-gray-800 items-start justify-center p-5 rounded-md mb-8">
        <form onSubmit={handleSubmit(createProduct)}>
          <FormProvider {...registrationForm}>
            <RegistrationForm />
          </FormProvider>
        </form>
      </section>
      <section  className="bg-gray-800 rounded-t-md">
        <Table
          products={products}
          fetchProducts={fetchProducts}
        />
      </section>
    </body>
  );

}
