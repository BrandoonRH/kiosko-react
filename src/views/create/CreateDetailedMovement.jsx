import React from 'react'

const CreateDetailedMovement = () => {
  return (
    <div>
    <h1 className="text-4xl text-center font-black">Crea un detallado Movimiento en el Almacen</h1>
   
        <div className="container mx-auto  p-10 mt-10">
                    <form action="" className=" w-8/12 mx-auto space-y-5 p-5">
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="articulo" className="font-bold text-center text-xl">Articulo:</label>
                            <input type="number" placeholder="Descripción del articulo"  id="concepto" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="cant" className="font-bold text-center text-xl">Cantidad:</label>
                            <input type="number" placeholder="Cantidad del Articulo"  id="cant" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="unidad" className="font-bold text-center text-xl">Unidad:</label>
                            <input type="text" placeholder="Unidad de Medidad del articulo"  id="unidad" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="costo" className="font-bold text-center text-xl">Costo:</label>
                            <input type="number" placeholder="Costo del articulo"  id="costo" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                       
                        
                        <input type="submit" value="Crear Movimiento" className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
                    </form>
        </div>
    </div>
  )
}

export default CreateDetailedMovement