import { useEffect } from "react";
import { TableProps } from "../../interfaces/Table.interface";
import TableRow from "./components/TableRow";

export default function Table({ products, fetchProducts, showModal }: TableProps) {

  useEffect(() => {
    fetchProducts();
  },[products])


  return (
    <table className="w-[50rem] table-fixed	">
      <thead>
        <tr className="text-left bg-stone-500">
          <th className="px-2 py-1 rounded-tl-lg w-1/12">Id</th>
          <th className="px-2 py-1 w-2/12">Name</th>
          <th className="px-2 py-1 w-1/12">Price</th>
          <th className="px-2 py-1 w-4/12">Description</th>
          <th className="px-2 py-1 rounded-tr-lg w-2/12">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <TableRow
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              showModal={showModal}
            />
          )
        })}
      </tbody>
    </table>
  )
}