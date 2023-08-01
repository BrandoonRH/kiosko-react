import { Link } from "react-router-dom"
import WarehouseMovements from "../data/WarehouseMovements"
import WarehouseMovement from "../components/WarehouseMovement"
import Add from "../components/Add"
import DetailsMovements from "../data/DetailsMovements"
import DetailMovement from "../components/DetailMovement"
import {HiOutlineClipboardList, HiOutlineChevronDoubleRight} from "react-icons/hi"

const Warehouse = () => {

   //TODO Logica de la API
  

  return (
    <div>
        <div className='flex  items-center gap-2'>
            <h1 className='text-4xl font-black'>Almacén</h1>
            <HiOutlineClipboardList size={35}/>
        </div>
        <p className='text-2xl my-10'>
            Administra los movimientos del almacén desde aquí
        </p>
        <Link to="/admin/dasboard/warehouse-movements" className="text-2xl flex justify-between items-center bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200 hover:underline hover:text-black transition-all duration-300 ">
          <p>Ir al Dashboard</p>
          <HiOutlineChevronDoubleRight/>
        </Link>

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
                        <th className="border border-slate-600 bg-gray-300">Acciones</th>
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