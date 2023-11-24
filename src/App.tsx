import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Table from "./components/Table";
import { Product, RegistrationFormData, registrationFormValidationSchema } from "./interfaces/App.interface";
import { getAll, create } from "./api/api";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UpdateModal from "./components/UpdateModal";

export default function App() {

  const [products, setProducts] = useState<Product[]>([])

  const [ dataDisplayedInModal, setDataDisplayedInModal ] = useState<Product>({} as Product);

  const [ showUpdateModal, setShowUpdateModal ] = useState<Boolean>(false);

  const registrationForm = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormValidationSchema),
    defaultValues: {
      name: "",
      price: undefined,
      description: ""
    }
  });
  
  const { handleSubmit: handleRegistrationSubmit, reset: resetRegistrationForm } = registrationForm;
  

  
  const toggleModal = () => setShowUpdateModal(!showUpdateModal);
  
  async function fetchProducts() {
    const allProducts = await getAll();
    setProducts(allProducts);
  }

  async function createProduct(data: RegistrationFormData) {
    await create(data);
    fetchProducts();
    resetRegistrationForm();
  }

  function showModal(product: Product) {
    toggleModal();
    setDataDisplayedInModal(product);
  }

  return (
    <div className="h-screen bg-gray-900 text-slate-50 flex flex-col items-center content-center p-8">
      <h1 className="text-2xl my-8">CRUD Operations</h1>
      <section className="w-[37rem] flex flex-col gap-4 bg-gray-800 items-start justify-center p-5 rounded-md mb-8">
        <form onSubmit={handleRegistrationSubmit(createProduct)}>
          <FormProvider {...registrationForm}>
            <RegistrationForm />
          </FormProvider>
        </form>
      </section>
      <section  className="bg-gray-800 rounded-t-md">
        <Table
          products={products}
          fetchProducts={fetchProducts}
          showModal={showModal}
        />
      </section>
      {
        showUpdateModal ? (
          <UpdateModal
            id={dataDisplayedInModal.id}
            name={dataDisplayedInModal.name}
            price={dataDisplayedInModal.price}
            description={dataDisplayedInModal.description}
            toggleModal={toggleModal}
            fetchProducts={fetchProducts}
          />
        ) : null
      }
      
    </div>
  );

}
