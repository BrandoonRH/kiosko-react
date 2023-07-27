import { Link } from "react-router-dom"
import Add from "../components/Add"
import productsMP from "../data/productsMP"
import productsPT from "../data/productsPT"
import ProductStock from "../components/ProductStock"


const ProductsWarehouse = () => {
  return (
    <div>
          <div className='flex  items-center gap-2'>
              <h1 className='text-4xl font-black'>Almacén Productos</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>

          </div>
          <p className='text-2xl my-10'>
              Administra los productos del almacén desde aquí
          </p>


            {/*Productos PT*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Productos - Producto Terminado</p>
                  <Link to="/admin/create/finished-product">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">ID</th>
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
                        productsPT.map((product) => (
                          <ProductStock
                            key={product.id}
                            id={product.id}
                            sku={product.sku}
                            descripcion={product.descripcion}
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
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Productos - Producto Materia Prima</p>
                  <Link to="/admin/create/material">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full">
                    <thead>
                      <tr>
                      <th className="border border-slate-600 bg-gray-300">ID</th>
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
                        productsMP.map((product) => (
                          <ProductStock
                            key={product.id}
                            id={product.id}
                            sku={product.sku}
                            descripcion={product.descripcion}
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