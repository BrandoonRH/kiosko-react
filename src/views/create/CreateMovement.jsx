import React from 'react'

const CreateMovement = () => {
  return (
    <div>
    <h1 className="text-4xl text-center font-black">Crea un Movimiento en el Almacen</h1>
   
        <div className="container mx-auto  p-10 mt-10">
                    <form action="" className=" w-8/12 mx-auto space-y-5 p-5">
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="concepto" className="font-bold text-center text-xl">Concepto:</label>
                            <input type="text" placeholder="Descripción del Concepto"  id="concepto" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="total" className="font-bold text-center text-xl">Costo Total:</label>
                            <input type="number" placeholder="Costo total del Movimiento"  id="total" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="tipo" className="font-bold text-center text-xl">Tipo de Movimiento:</label>
                            <select id="tipo" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                <option value="1">Entrada</option>
                                <option value="2">Salida</option>
                            </select>
                        </div>
                       
                        
                        <input type="submit" value="Guardar" className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
                    </form>
        </div>
    </div>
  )
}

export default CreateMovement