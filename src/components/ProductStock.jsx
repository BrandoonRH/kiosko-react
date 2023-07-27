import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"

const ProductStock = ({id, sku, descripcion, unidad, min, max, existencia}) => {
  return (
    <tr className="hover:bg-gray-200 text-center">
    <td className="border border-slate-700 ">{id}</td>
    <td className="border border-slate-700 ">{sku}</td>
    <td className="border border-slate-700 ">{descripcion}</td>
    <td className="border border-slate-700 ">{unidad}</td>
    <td className="border border-slate-700 ">{min}</td>
    <td className="border border-slate-700 ">{max}</td>
    <td className="border border-slate-700 ">{existencia}</td>
    <td className="flex justify-center items-center h-12">
            <IconEdit/>
            <IconDelete/>
    </td>
</tr>
  )
}

export default ProductStock