import { useState } from "react";
import { redirect } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify'
import useGetUnits from "../../hooks/useGetUnits"
import useGetUsers from "../../hooks/useGetUsers"; 
import useGetFinishedProduct from "../../hooks/useGetFinishedProduct";
import useGetRawMaterials from "../../hooks/useGetRawMaterials";

const CreateMovement = () => {
    
    const [warehousemovement, setWarehouseMovement] = useState({}); 
    const [isMTSelected, setIsMTSelected] = useState(false);
    const [isPTSelected, setIsPTSelected] = useState(false);

    const {data: unidades} = useGetUnits(); 
    const {data: users} = useGetUsers(); 
    const {data: FinishedProduct} = useGetFinishedProduct();
    const {data: RawMaterials} = useGetRawMaterials(); 

    const handleMTChange = () => {
        setIsMTSelected(true);
        setIsPTSelected(false);
        setWarehouseMovement((prevData) => ({
            ...prevData,
            w: "MT" // Aquí asignamos "MT" al campo w del estado
          }));
      };
    
      const handlePTChange = () => {
        setIsMTSelected(false);
        setIsPTSelected(true);
        setWarehouseMovement((prevData) => ({
            ...prevData,
            w: "PT" // Aquí asignamos "PT" al campo w del estado
          }));
      };

      const handleChange = (e) => {
        setWarehouseMovement({
            ...warehousemovement, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault(); 
        //console.log(warehousemovement); 
        await axios.get(`${import.meta.env.VITE_API_URL_MASTER}act=nmp&
                type=${warehousemovement.tipoMovimiento}&
                concepto=${warehousemovement.concepto}&
                user=${warehousemovement.user}&
                idArt=${warehousemovement.idArt}&
                cantArt=${warehousemovement.cantArt}&
                unidArt=${warehousemovement.unidArt}&
                w=${warehousemovement.w}`
            );
            toast.success('Movimiento Creado Correctamente'); 
            setTimeout(() => {
                window.location.href = '/admin/warehouse';
              }, 5000); 
    }//Fin handle
    
    
  return (
    <div>
    <h1 className="text-4xl text-center font-black">Crea un Movimiento en el Almacen</h1>
   
        <div className="container mx-auto  p-10 mt-10">
                    <form onSubmit={handleSubmit} className=" w-8/12 mx-auto space-y-5 p-5">
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="concepto" className="font-bold text-center text-xl">Concepto:</label>
                            <input onChange={handleChange} name="concepto" type="text" placeholder="Descripción del Concepto"  id="concepto" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="unidArt" className="font-bold text-center text-xl">Unidad:</label>
                           <select onChange={handleChange} defaultValue="" name="unidArt"  id="unidArt" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                               <option value="" selected>-- Seleccione --</option>
                                {
                                    unidades?.map((item) => (
                                        <option  value={item.id} key={item.id} >{item.descripcion}</option>
                                    ))
                                 }
                           </select>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="user" className="font-bold text-center text-xl">Usuario:</label>
                           <select onChange={handleChange} defaultValue="" name="user"  id="user" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                               <option value="" selected>-- Seleccione --</option>
                                {
                                    users?.map((item) => (
                                        <option  value={item.id} key={item.id} >{item.nombre}</option>
                                    ))
                                 }
                           </select>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="cantArt" className="font-bold text-center text-xl">Cantidad Articulo:</label>
                            <input onChange={handleChange} type="number" name="cantArt" placeholder="Costo total del Movimiento"  id="cantArt" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="type" className="font-bold text-center text-xl">Tipo de Movimiento:</label>
                            <select onChange={handleChange} defaultValue="" id="type" name="tipoMovimiento" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                <option value="ENTRADA">Entrada</option>
                                <option value="SALIDA">Salida</option>
                            </select>
                        </div>
                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label className="font-bold text-center text-xl">Selecciona:</label>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={isMTSelected}
                                    onChange={handleMTChange}
                                />
                                <label>Materia Prima (MT)</label>
                                <input
                                    type="checkbox"
                                    checked={isPTSelected}
                                    onChange={handlePTChange}
                                />
                                <label>Productos Terminados (PT)</label>
                            </div>
                        </div>
                        {isMTSelected && (
                            <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                                <label className="font-bold text-center text-xl">Tipo de Materia Prima:</label>
                                <select onChange={handleChange} defaultValue="" name="idArt" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                    {
                                         RawMaterials?.map((item) => (
                                            <option value={item.id} key={item.sku} >{item.nombre} - {item.sku}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )}

                        {isPTSelected && (
                            <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                                <label className="font-bold text-center text-xl">Tipo de Producto Terminado:</label>
                                <select onChange={handleChange} defaultValue="" name="idArt" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                    {
                                         FinishedProduct?.map((item) => (
                                            <option value={item.id} key={item.sku} >{item.nombre} - {item.sku}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )}
                    
                        
                        <input type="submit" value="Guardar" className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
                    </form>
        </div>
    </div>
  )
}

export default CreateMovement