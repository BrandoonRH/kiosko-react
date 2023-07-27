import { Link } from "react-router-dom"
import WarehouseMovements from "../data/WarehouseMovements"
import WarehouseMovement from "../components/WarehouseMovement"
import Add from "../components/Add"
import DetailsMovements from "../data/DetailsMovements"
import DetailMovement from "../components/DetailMovement"


const Warehouse = () => {
  

  return (
    <div>
        <div className='flex  items-center gap-2'>
            <h1 className='text-4xl font-black'>Almacén</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        </div>
        <p className='text-2xl my-10'>
            Administra los movimientos del almacén desde aquí
        </p>

        {/*Movimientos  Almacén*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Movimientos del almacén</p>
                  <Link to="/admin/create/movement-warehouse">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">ID</th>
                        <th className="border border-slate-600 bg-gray-300 ">Folio</th>
                        <th className="border border-slate-600 bg-gray-300">Concepto</th>
                        <th className="border border-slate-600 bg-gray-300 ">Total Costo</th>
                        <th className="border border-slate-600 bg-gray-300 ">Tipo Movimiento</th>
                        <th className="border border-slate-600 bg-gray-300 ">Fecha Movimiento</th>
                        <th className="border border-slate-600 bg-gray-300 ">Usuario</th>
                        <th className="order border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                      {
                        WarehouseMovements.map((movement) => (
                            <WarehouseMovement
                              key={movement.id}
                              id={movement.id}
                              folio={movement.folio}
                              concepto={movement.concepto}
                              totalCosto={movement.total_costo}
                              TipoMovi={movement.tipo_mov}
                              FechaMovi={movement.fecha_mov}
                              Usuario={movement.usuario}
                            />
                        ))
                      }
                           
                    </tbody>
              </table>
              </div>
        </div>


        {/*Movimientos Detalles Almacén*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Detalles movimientos del almacén</p>
                  <Link to="/admin/create/detailed-movement">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">Id</th>
                        <th className="border border-slate-600 bg-gray-300 ">Id Movimiento</th>
                        <th className="border border-slate-600 bg-gray-300">Articulo</th>
                        <th className="border border-slate-600 bg-gray-300 ">Cantidad</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad</th>
                        <th className="border border-slate-600 bg-gray-300 ">Costo</th>
                        <th className="order border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                      {
                        DetailsMovements.map((detail) => (
                          <DetailMovement
                            key={detail.id}
                            id={detail.id}
                            idMovi={detail.id_movimiento}
                            articulo={detail.articulo}
                            cant={detail.cant}
                            unidad={detail.unidad}
                            costo={detail.costo}
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

export default Warehouse