import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"

const User = ({id, nombres, apellidos, usuario, email}) => {
  return (
    <tr className="hover:bg-gray-200 text-center">
        <td className="border border-slate-700 ">{id}</td>
        <td className="border border-slate-700 ">{nombres}</td>
        <td className="border border-slate-700 ">{apellidos}</td>
        <td className="border border-slate-700 ">{usuario}</td>
        <td className="border border-slate-700 ">{email}</td>
       
        <td className="flex justify-center items-center h-12">
                <IconEdit/>
                <IconDelete/>
        </td>
    </tr>
  )
}

export default User