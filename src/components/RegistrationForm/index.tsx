import { useFormContext } from 'react-hook-form';

export default function RegistrationForm() {

  const { register } = useFormContext();

  return (
    <div>
      <h2 className="mb-2">Register a product</h2>
      <div className="w-[34.5rem] flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <input className="rounded-sm w-4/6 p-1 bg-gray-700 outline-stone-600" type="text" placeholder="Name" {...register("name")}/>
          <input className="rounded-sm w-2/6 p-1 bg-gray-700" type="text" placeholder="Price" {...register("price", { valueAsNumber: true })}/>
        </div>
        <input className="rounded-sm p-1 w-full bg-gray-700" type="text" placeholder="Description" {...register("description")}/>
      </div>
      <button className="mt-5 bg-stone-500 rounded-md py-1 px-3 border-none text-sm hover:bg-stone-400 hover:shadow-lg hover:shadow-gray-500/50">Register</button>
    </div>
  );
}