
import formulationsData from "../data/formulations"
import Formulation from "../components/Formulation"



const Formulations = () => {
  return (
    <div>
    <div className='flex  items-center gap-2'>
        <h1 className='text-4xl font-black'>Formulaciones</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>

    </div>
    <p className='text-2xl my-10'>
       Formulas que se utilizan para la elaboración de los productos
    </p>

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