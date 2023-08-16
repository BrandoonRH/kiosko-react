import { Link } from "react-router-dom"
import axios from "axios"
import IconEdit from "../components/IconEdit"
import IconDelete from "../components/IconDelete"
import {toast} from 'react-toastify'

const ProductStockPT = ({id, sku, descripcion, unidad, min, max, existencia}) => {

  const deletePT = () => {
    axios.get(`http://localhost/Backend-proyectofinal/app.services.php?act=dp&nm=PT&sku=${sku}`);
    toast.warn('Producto Eliminado!', {
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
    <td className="border border-slate-700 ">{sku}</td>
    <td className="border border-slate-700 ">{descripcion}</td>
    <td className="border border-slate-700 ">{unidad}</td>
    <td className="border border-slate-700 ">{min}</td>
    <td className="border border-slate-700 ">{max}</td>
    <td className="border border-slate-700 ">{existencia}</td>
    <td className="flex justify-center items-center h-12">
             <Link to={`/admin`}>
                   <IconEdit/>
            </Link>
            <button type="button" onClick={deletePT}>
                  <IconDelete/>
            </button>
    </td>
</tr>
  )
}

export default ProductStockPT