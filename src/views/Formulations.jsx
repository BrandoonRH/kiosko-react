
import formulationsData from "../data/formulations"
import Formulation from "../components/Formulation"
import {HiOutlineCollection, HiOutlineChevronDoubleRight} from "react-icons/hi"
import { Link } from "react-router-dom"

const Formulations = () => {

  //TODO Logica de la API


  return (
    <div>
    <div className='flex  items-center gap-2'>
        <h1 className='text-4xl font-black'>Formulaciones</h1>
        <HiOutlineCollection size={36}/>

    </div>
    <p className='text-2xl my-10'>
       Formulas que se utilizan para la elaboración de los productos
    </p>
    <Link to="/admin/dasboard/" className="text-2xl flex justify-between items-center bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200 hover:underline hover:text-black transition-all duration-300 ">
      <p>Ir al Dashboard</p>
      <HiOutlineChevronDoubleRight/>
    </Link>
 {/*Formulaciones*/}
 <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Formulas de Preparacion</p>
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">ID</th>
                        <th className="border border-slate-600 bg-gray-300 ">ID Padre</th>
                        <th className="border border-slate-600 bg-gray-300">Producto Minimo</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad</th>
                        <th className="border border-slate-600 bg-gray-300 ">ID Componente</th>
                        <th className="border border-slate-600 bg-gray-300 ">Cantidad Componente</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad del Componente</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {
                        formulationsData.map((formu) => (
                            <Formulation
                              key={formu.id}
                              id={formu.id}
                              idPadre={formu.id_padre}
                              minProd={formu.min_prod}
                              unidad={formu.unidad}
                              idComp={formu.id_componente}
                              cantComp={formu.cant_componente}
                              unidadComp={formu.unidad_componente}
                            />
                        ))
                      }
                    
                    </tbody>
              </table>
              </div>
        </div>

</div>
  )
}

export default Formulations