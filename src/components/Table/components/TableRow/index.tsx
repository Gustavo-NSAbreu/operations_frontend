import { kill } from "../../../../api/api";
import { TableRowProps } from "../../../../interfaces/TableRow.interface";

export default function TableRow({ id,  name, price, description, showModal }: TableRowProps) {

  const formattedPrice = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2}).format(price);

  function handleEdit() {
    showModal({id, name, price, description});
  }

  function handleDelete() {
    kill(id)
  }

  return (
    <tr className="border-b-[1px] border-stone-300 text-left">
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{id}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{name}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">$ {formattedPrice}</td>
      <td className="py-1 px-2 border-r-[1px] border-stone-300 truncate">{description}</td>
      <td className="py-1 px-2.5 text-center">
        <button onClick={handleEdit} className="bg-stone-500 rounded-md py-[1px] px-3 border-none text-sm mr-2 hover:bg-stone-400 hover:shadow-lg hover:shadow-gray-500/50">Edit</button>
        <button onClick={handleDelete} className="bg-stone-500 rounded-md py-[1px] px-3 border-none text-sm hover:bg-stone-400 hover:shadow-lg hover:shadow-gray-500/50">Delete</button>
      </td>
    </tr>
  );
}