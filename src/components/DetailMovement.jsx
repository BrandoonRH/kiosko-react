import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"

const DetailMovement = ({id, idMovi, articulo, cant, unidad, costo }) => {
  return (
    <tr className="hover:bg-gray-200 text-center">
            <td className="border border-slate-700 ">{id}</td>
            <td className="border border-slate-700 ">{idMovi}</td>
            <td className="border border-slate-700 ">{articulo}</td>
            <td className="border border-slate-700 ">{cant}</td>
            <td className="border border-slate-700 ">{unidad}</td>
            <td className="border border-slate-700 ">{costo}</td>
            <td className="flex justify-center items-center h-12">
                    <IconEdit/>
                    <IconDelete/>
            </td>
    </tr>
  )
}

export default DetailMovement