import { TableRowProps } from "../../../../interfaces/TableRow.interface";

export default function TableRow({ id,  name, price, description }: TableRowProps) {

  const formattedPrice = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(price);

  function handleEdit() {

  }

  function handleDelete() {
    
  }

  return (
    <tr className="border-b-[1px] border-stone-300 text-left">
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{id}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{name}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">$ {formattedPrice}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{description}</td>
      <td className="py-1 px-2.5 text-center">
        <button onClick={handleEdit} className="bg-stone-600 rounded-md py-[1px] px-3 border-none text-sm mr-2">Edit</button>
        <button onClick={handleDelete} className="bg-stone-600 rounded-md py-[1px] px-3 border-none text-sm">Delete</button>
      </td>
    </tr>
  );
}