import { useEffect } from "react";
import { TableProps } from "../../interfaces/Table.interface";
import TableRow from "./components/TableRow";
import { getProducts } from "../../api/api";


export default function Table({ products, setProducts }: TableProps) {

  async function fetchProducts() {
    const allProducts = await getProducts();
    setProducts(allProducts);
  }

  useEffect(() => {
    fetchProducts();
  },[products])


  return (
    <table className="w-[50rem] table-fixed	">
      <thead>
        <tr className="text-left bg-stone-600">
          <th className="p-1 rounded-tl-lg w-2/12">Id</th>
          <th className="p-1 w-2/12">Name</th>
          <th className="p-1 w-1/12">Price</th>
          <th className="p-1 w-4/12">Description</th>
          <th className="p-1 rounded-tr-lg w-2/12">Actions</th>
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
            />
          )
        })}
      </tbody>
    </table>
  )
}