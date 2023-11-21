import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Table from "./components/Table";
import { Product } from "./interfaces/App.interface";

export default function App() {

  const [products, setProducts] = useState<Product[]>([])
  
  return (
    <body className="h-screen bg-gray-900 text-slate-50 flex flex-col items-center content-center p-8">
      <h1 className="text-2xl my-8">CRUD Operations</h1>
      <section className="w-[37rem] flex flex-col gap-4 bg-gray-800 items-start justify-center p-5 rounded-md mb-8">
        <RegistrationForm />
      </section>
      <section  className="bg-gray-800 rounded-t-md">
        <Table
          products={products}
          setProducts={setProducts}
        />
      </section>
    </body>
  );

}
