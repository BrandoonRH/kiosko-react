import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link } from "react-router-dom"
import Add from "../components/Add"
import ProductStockMP from "../components/ProductStockMP"
import ProductStockPT from "../components/ProductStockPT"
import {HiOutlineClipboardCheck, HiOutlineChevronDoubleRight} from "react-icons/hi"
import useGetFinishedProduct from "../hooks/useGetFinishedProduct"
import useGetRawMaterials from "../hooks/useGetRawMaterials"

const ProductsWarehouse = () => {
   //TODO Logica de la API

   const {data: productT, isLoading: isLoadingproductT, error: errorProductT} = useGetFinishedProduct(); 
   const {data: rawMaterials, isLoading: isLoadingrawMaterials, errorRawMaterials} = useGetRawMaterials(); 
   
   const downloadPDF = () => {
      const doc = new jsPDF();
      const table = document.getElementById('tableProductsWarehouse'); // Reemplaza 'tableId' con el ID de tu tabla
      doc.autoTable({ html: table });
      doc.save('Productos-Almacén.pdf');
    };
  return (
    <div>
          <div className='flex  items-center gap-2'>
              <h1 className='text-4xl font-black'>Almacén Productos</h1>
              <HiOutlineClipboardCheck size={36}/>

          </div>
          <p className='text-2xl my-10'>
              Administra los productos del almacén desde aquí
          </p>
          <Link to="/admin/dasboard/products-warehouse" className="text-2xl flex justify-between items-center bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200 hover:underline hover:text-black transition-all duration-300 ">
              <p>Ir al Dashboard</p>
              <HiOutlineChevronDoubleRight/>
          </Link>
          <button onClick={downloadPDF} 
            className="text-2xl my-5 flex m-auto  bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200  hover:text-black transition-all duration-300 " 
            >
              Descargar PDF
          </button>

            {/*Productos PT*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border bg-indigo-500 text-white rounded-lg border-black'>
                  <p className='text-2xl font-semibold'>Productos - Producto Terminado</p>
                  <Link to="/admin/create/finished-product">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full" id="tableProductsWarehouse">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300 ">SKU</th>
                        <th className="border border-slate-600 bg-gray-300">Descripción</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad</th>
                        <th className="border border-slate-600 bg-gray-300 ">Min</th>
                        <th className="border border-slate-600 bg-gray-300 ">Max</th>
                        <th className="border border-slate-600 bg-gray-300 ">Existencia</th>
                        <th className="border border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                      {
                        productT?.map((product) => (
                          <ProductStockPT
                            key={product.sku}
                            sku={product.sku}
                            descripcion={product.nombre}
                            unidad={product.unidad}
                            min={product.min}
                            max={product.max}
                            existencia={product.existencia}
                          />
                        ))
                      }                     
                           
                    </tbody>
              </table>
              </div>
        </div>


        {/*Productos MP*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border bg-indigo-500 text-white rounded-lg border-black'>
                  <p className='text-2xl font-semibold'>Productos - Producto Materia Prima</p>
                  <Link to="/admin/create/material">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300 ">SKU</th>
                        <th className="border border-slate-600 bg-gray-300">Descripción</th>
                        <th className="border border-slate-600 bg-gray-300 ">Unidad</th>
                        <th className="border border-slate-600 bg-gray-300 ">Min</th>
                        <th className="border border-slate-600 bg-gray-300 ">Max</th>
                        <th className="border border-slate-600 bg-gray-300 ">Existencia</th>
                        <th className="order border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                    {
                        rawMaterials?.map((product) => (
                          <ProductStockMP
                            key={product.sku}
                            sku={product.sku}
                            descripcion={product.nombre}
                            unidad={product.unidad}
                            min={product.min}
                            max={product.max}
                            existencia={product.existencia}
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

export default ProductsWarehouse