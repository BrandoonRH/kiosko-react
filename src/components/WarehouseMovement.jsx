import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"

const WarehouseMovement = ({id, folio, concepto, totalCosto, TipoMovi, FechaMovi, Usuario,}) => {
  return (
    <tr className="hover:bg-gray-200">
        <td className="border border-slate-700 ">{id}</td>
        <td className="border border-slate-700 ">{folio}</td>
        <td className="border border-slate-700 ">{concepto}</td>
        <td className="border border-slate-700 ">{totalCosto}</td>
        <td className="border border-slate-700 ">{TipoMovi}</td>
        <td className="border border-slate-700 ">{FechaMovi}</td>
        <td className="border border-slate-700 ">{Usuario}</td>
        <td className="flex justify-center items-center h-12">
                <IconEdit/>
                <IconDelete/>
        </td>
    </tr>
  )
}

export default WarehouseMovement