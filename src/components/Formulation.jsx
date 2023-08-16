import { Link } from "react-router-dom"
import axios from "axios"
import IconDelete from "./IconDelete"
import IconEdit from "./IconEdit"
import {toast} from 'react-toastify'

const Formulation = ({id, MinProduccion, UnidadComponente, UnidadPadre, cantComponente, prodComponente, prodPadre}) => {

  const deleteFormulation = () => {
    axios.get(`http://localhost/Backend-proyectofinal/app.services.php?act=df&id=${id}`);
    toast.warn('Formulación Eliminada!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <tr className="hover:bg-gray-200 text-center">
        <td className="border border-slate-700 ">{id}</td>
        <td className="border border-slate-700 ">{MinProduccion}</td>
        <td className="border border-slate-700 ">{UnidadComponente}</td>
        <td className="border border-slate-700 ">{UnidadPadre}</td>
        <td className="border border-slate-700 ">{cantComponente}</td>
        <td className="border border-slate-700 ">{prodComponente}</td>
        <td className="border border-slate-700 ">{prodPadre}</td>
        <td className="flex justify-center items-center h-12">

               <Link to={`/admin/create/formulation?id=${id}`}>
                   <IconEdit/>
               </Link>

                <button type="button" onClick={deleteFormulation}>
                  <IconDelete/>
                </button>
                
        </td>
    </tr>
  )
}

export default Formulation