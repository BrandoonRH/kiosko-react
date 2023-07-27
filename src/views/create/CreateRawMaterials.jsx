import React from 'react'

const CreateRawMaterials = () => {
  return (
    <div>
    <h1 className="text-4xl text-center font-black">Producto Materia Prima</h1>
   
   <div className="container mx-auto  p-10 mt-10">
            <form action="" className=" w-8/12 mx-auto space-y-5 p-5">
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="sku" className="font-bold text-center text-xl">SKU:</label>
                    <input type="text" placeholder="SKU del Producto"  id="sku" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="descripcion" className="font-bold text-center text-xl">Descripción:</label>
                    <input type="text" placeholder="Descripción del Producto Terminado"  id="descripcion" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="unidad" className="font-bold text-center text-xl">Unidad:</label>
                    <input type="text" placeholder="unidad del producto eje. 'Kg'"  id="username" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="min" className="font-bold text-center text-xl">Minimo:</label>
                    <input type="number" placeholder="Cantidad Minima de Producción"  id="min" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="max" className="font-bold text-center text-xl">Maximo:</label>
                    <input type="number" placeholder="Cantidad maxima de Producción"  id="max" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                    <label htmlFor="existencia" className="font-bold text-center text-xl">Existenca:</label>
                    <input type="number" placeholder="Cantidad existencia del Producto"  id="existencia" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                </div>
                
                <input type="submit" value="Guardar" className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
            </form>
   </div>
</div>
  )
}

export default CreateRawMaterials