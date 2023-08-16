import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"

const User = ({id, nombre, usuario}) => {
  return (
    <tr className="hover:bg-gray-200 text-center">
        <td className="border border-slate-700 ">{id}</td>
        <td className="border border-slate-700 ">{nombre}</td>
        <td className="border border-slate-700 ">{usuario}</td>
        <td className="flex justify-center items-center h-12">
                <IconEdit/>
                <IconDelete/>
        </td>
    </tr>
  )
}

export default User