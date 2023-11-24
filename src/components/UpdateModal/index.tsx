import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateModalProps, UpdateFormData, updateFormValidationSchema, UpdateProductFormData } from "../../interfaces/Modal.interface";
import { update } from "../../api/api";
import { validateData } from "../../helpers/validation";

export default function UpdateModal( { id, name, price, description, toggleModal, fetchProducts }: UpdateModalProps ) {

  const updateForm = useForm<UpdateFormData>({
    resolver: zodResolver(updateFormValidationSchema),
    defaultValues: {
      id,
      name: undefined,
      price: undefined,
      description: undefined
    }
  });
  
  const { handleSubmit, reset, register} = updateForm;


  async function updateProduct(data: UpdateProductFormData) {
    console.log(data);
    await update(validateData(data, name, price, description));
    fetchProducts();
    reset();
    toggleModal();
  }

  return (
    
    <div className="fixed top-0 left-0 w-screen h-screen bg-modal-container flex justify-center items-center">
      <form 
        className="w-[35rem] flex flex-col gap-4 bg-gray-800 items-start justify-center p-5 rounded-md mb-8"
        onSubmit={handleSubmit(updateProduct, (errors) => { console.log(errors) })}>
        <FormProvider {...updateForm}>
          <h2 className="mb-5">Update a product</h2>
          <div className="w-[32.5rem] flex flex-col gap-3">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex flex-row justify-between items-center w-full text-sm">
                <span>Name:</span>
                <span>{name}</span>
              </div>
              <div className="flex flex-row justify-between items-center w-full text-sm">
                <span>Price:</span>
                <span>{price}</span>
              </div>
              <div className="flex flex-row justify-between items-center w-full text-sm">
                <span>Description:</span>
                <span>{description}</span>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input className="rounded-sm w-4/6 p-1 bg-gray-700 outline-stone-600" type="text" placeholder="Name" {...register("name")}/>
              <input 
                className="rounded-sm w-2/6 p-1 bg-gray-700"
                type="text"
                placeholder="Price"
                {
                  ...register("price", { 
                    setValueAs: v => v ? parseFloat(v) : undefined  
                  })
                }
              />
            </div>
            <input className="rounded-sm p-1 w-full bg-gray-700" type="text" placeholder="Description" {...register("description")}/>
          </div>
          <div className="flex flex-row gap-2">
            <button type="submit" className="mt-5 bg-stone-600 rounded-md py-1 px-3 border-none text-sm">Confirm</button>
            <button onClick={toggleModal} className="mt-5 bg-stone-600 rounded-md py-1 px-3 border-none text-sm">Cancel</button>
          </div>
        </FormProvider>
      </form>
    </div>
  )
}