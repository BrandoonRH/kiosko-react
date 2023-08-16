import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import useGetUnits from "../../hooks/useGetUnits";

const CreateFinishedProduct = () => {

    const [finishedProduct, setFinishedProduct] = useState({});

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const { data: unidades, error, isLoading} = useGetUnits();

    const handleChange = (e) => {
        setFinishedProduct({
            ...finishedProduct, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id){
            //Editar

        }
        await axios.get(`${import.meta.env.VITE_API_URL_MASTER}act=cp&nm=PT&
            sku=${finishedProduct?.sku}&
            descripcion=${finishedProduct?.descripcion}&
            unidad=${finishedProduct?.unidad}&
            min=${finishedProduct?.min}&
            max=${finishedProduct?.max}&
            existencia=${finishedProduct?.existencia}
        `);
         toast.success('Guardada Correctamente'); 
         setTimeout(() => {
            window.location.href = '/admin/products-warehouse';
          }, 5000); 
    }

  return (
    <div>
        <h1 className="text-4xl text-center font-black">Producto Terminado Registro</h1>
       
       <div className="container mx-auto  p-10 mt-10">
                <form onSubmit={handleSubmit} className=" w-8/12 mx-auto space-y-5 p-5">
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="sku" className="font-bold text-center text-xl">SKU:</label>
                        <input type="text"  name="sku" onChange={handleChange} value={finishedProduct?.sku || ''} placeholder="SKU del Producto"  id="sku" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="descripcion" className="font-bold text-center text-xl">Descripción:</label>
                        <input type="text" name="descripcion" onChange={handleChange} value={finishedProduct?.descripcion || ''} placeholder="Descripción del Producto Terminado"  id="descripcion" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="unidad" className="font-bold text-center text-xl">Unidad:</label>
                        <select name="unidad" defaultValue={""} onChange={handleChange}  id="unidad" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                {
                                    Object.keys(finishedProduct).length === 0 ? (
                                       
                                        <option selected value="">-- seleccione --</option>
                                    ) : ( 
                                        <option selected value="" >{finishedProduct?.unidad}</option>
                                    )
                                }
                                {
                                    unidades?.map((item) => (
                                        <option  value={item.id} key={item.id} >{item.descripcion}</option>
                                    ))
                                 }
                           </select>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="min" className="font-bold text-center text-xl">Minimo:</label>
                        <input type="number" name="min" onChange={handleChange} value={finishedProduct?.min || ''} placeholder="Cantidad Minima de Producción"  id="min" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="max" className="font-bold text-center text-xl">Maximo:</label>
                        <input type="number" name="max" onChange={handleChange} value={finishedProduct?.max || ''} placeholder="Cantidad maxima de Producción"  id="max" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="existencia" className="font-bold text-center text-xl">Existenca:</label>
                        <input type="number"  name="existencia" onChange={handleChange} value={finishedProduct?.existencia || ''}  placeholder="Cantidad existencia del Producto"  id="existencia" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    
                    <input type="submit" value={id ? 'Editar' : 'Guardar'} className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
                </form>
       </div>
    </div>
  )
}

export default CreateFinishedProduct