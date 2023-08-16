import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {HiOutlineCollection, HiOutlineChevronDoubleRight} from "react-icons/hi"
import { Link } from "react-router-dom"
import Formulation from "../components/Formulation"
import Add from '../components/Add'
import useGetFormulations from '../hooks/useGetFormulations'


const Formulations = () => {

  //TODO Logica de la API
const {data, isLoading, error} = useGetFormulations(); 


const downloadPDF = () => {
  const doc = new jsPDF();
  const table = document.getElementById('tableFormulations'); // Reemplaza 'tableId' con el ID de tu tabla
  doc.autoTable({ html: table });
  doc.save('Formulaciones.pdf');
};
  
  return (
    <div>
    <div className='flex  items-center gap-2'>
        <h1 className='text-4xl font-black'>Formulaciones</h1>
        <HiOutlineCollection size={36}/>
    </div>
    <p className='text-2xl my-10'>
       Formulas que se utilizan para la elaboración de los productos
    </p>
    <Link to="/admin/dasboard/formulations" className="text-2xl flex justify-between items-center bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200 hover:underline hover:text-black transition-all duration-300 ">
      <p>Ir al Dashboard</p>
      <HiOutlineChevronDoubleRight/>
    </Link>

    <button onClick={downloadPDF} className="text-2xl my-5 flex m-auto  bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200  hover:text-black transition-all duration-300 " >Descargar PDF</button>
    
 {/*Formulaciones*/}
 <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border bg-indigo-500 text-white rounded-lg border-black'>
              <p className='text-2xl font-semibold'>Formulas Preparación</p>
                  <Link to="/admin/create/formulation">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full" id="tableFormulations">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">ID</th>
                        <th className="border border-slate-600 bg-gray-300 ">Minimo Producción</th>
                        <th className="border border-slate-600 bg-gray-300">Unidad Componente</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad Padre</th>
                        <th className="border border-slate-600 bg-gray-300 ">Cantidad Componente</th>
                        <th className="border border-slate-600 bg-gray-300 ">Producción Componente</th>
                        <th className="border border-slate-600 bg-gray-300 ">Propiedad Padre</th>
                        <th className="border border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {

                      
                                  data?.map((formu) => (
                                    <Formulation
                                      key={formu.ID}
                                      id={formu.ID}
                                      MinProduccion={formu.minimo}
                                      UnidadComponente={formu.UnidadComponente}
                                      UnidadPadre={formu.UnidadComponente}
                                      cantComponente={formu.cantComponente}
                                      prodComponente={formu.prodComponente}
                                      prodPadre={formu.prodPadre}
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