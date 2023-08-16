import { createRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios"
import {toast} from 'react-toastify'
import useGetUnits from "../../hooks/useGetUnits"
import useGetFinishedProduct from "../../hooks/useGetFinishedProduct";
import useGetRawMaterials from "../../hooks/useGetRawMaterials";
import useGetFormulation from "../../hooks/useGetFormulation";


const CreateFormulation = () => {

    const [editForm, setEditFormu] = useState({});

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const { data: unidades, error, isLoading} = useGetUnits();
    const {data: productT} = useGetFinishedProduct(); 
    const {data: rawMaterials} = useGetRawMaterials(); 
    const {data: formula} = useGetFormulation(id);    

    useEffect(() => {
        setEditFormu(formula?.[0]); 
    },[formula?.[0]])
    
    const handleChange = (e) => {
        setEditFormu({
            ...editForm, 
            [e.target.name] : e.target.value
        })
    }

   // console.log(editForm); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        if(id){
                await axios.get(`${import.meta.env.VITE_API_URL_MASTER}act=uf&
                id=${id}&
                idp=${editForm.prodPadre}&
                minProd=${editForm.MinProduccion}&
                unidad=${editForm.UnidadPadre}&
                idc=${editForm.idc}&
                cantComp=${editForm.cantComponente}&
                uComp=${editForm.uComp}`
            );
            toast.success('Formula Actualizada Correctamente'); 
            setTimeout(() => {
                window.location.href = '/admin/formulations';
            }, 5000); 
        } else {
            await  axios.get(`${import.meta.env.VITE_API_URL_MASTER}act=cf&
                idp=${editForm.prodPadre}&
                minProd=${editForm.MinProduccion}&
                unidad=${editForm.UnidadPadre}&
                idc=${editForm.idc}&
                cantComp=${editForm.cantComponente}&
                uComp=${editForm.uComp}`
            );
             toast.success('Formula Guardada Correctamente'); 
             setTimeout(() => {
                window.location.href = '/admin/formulations';
              }, 5000); 
        }

          
    }//Fin handle

  return (
    <div>
         <h1 className="text-4xl text-center font-black">{id ? 'Editar Formulación' : 'Crear una Nueva Formulación'}</h1>
   
        <div className="container mx-auto  p-10 mt-2">
                    <form onSubmit={handleSubmit} className=" w-8/12 mx-auto space-y-5 p-3">

                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="idp" className="font-bold text-center text-xl">ID Padre:</label>
                           <select name="prodPadre" defaultValue="" onChange={handleChange} id="idp" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                {
                                    editForm ? (
                                        <option selected value="" >{editForm?.prodPadre}</option>
                                    ) : ( 
                                        <option selected value="">-- seleccione --</option>
                                    )
                                }
                                {
                                    productT?.map((item) => (
                                        <option  value={item.id} key={item.sku} >{item.nombre} - {item.sku} </option>
                                    ))
                                }
                           </select>
                        </div>

                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="minimo" className="font-bold text-center text-xl">Min. Producción:</label>
                            <input value={editForm?.minimo || ''} 
                             onChange={handleChange}
                             type="number" placeholder="Cantidad Minima de Producción"  id="minimo" 
                             className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"
                             name="minimo"
                             />
                        </div>

                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="unidad" className="font-bold text-center text-xl">Unidad:</label>
                           <select name="UnidadPadre" defaultValue="" onChange={handleChange}  id="unidad" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                                {
                                    editForm ? (
                                        <option selected value="" >{editForm?.UnidadPadre}</option>
                                    ) : ( 
                                        <option selected value="">-- seleccione --</option>
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
                            <label htmlFor="idc" className="font-bold text-center text-xl">ID Componente:</label>
                            <select name="idc" defaultValue="" onChange={handleChange}  id="idc" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                               {
                                    editForm ? (
                                        <option selected value="" >{editForm?.prodComponente}</option>
                                    ) : ( 
                                        <option selected value="">-- seleccione --</option>
                                    )
                                }   
                                {
                                    rawMaterials?.map((item) => (
                                        <option value={item.id} key={item.sku} >{item.nombre} - {item.sku}</option>
                                    ))
                                }
                           </select>
                        </div>

                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="cantComp" className="font-bold text-center text-xl">Cantidad Componente:</label>
                            <input value={editForm?.cantComponente}
                                 onChange={handleChange}
                                name="cantComponente"        
                                type="number" placeholder="Cantidad para la Fomrula"  id="cantComp" 
                                className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"
                                />
                        </div>

                        <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                            <label htmlFor="uComp" className="font-bold text-center text-xl">Unidad Componente:</label>
                            <select id="uComp" defaultValue="" name="uComp" onChange={handleChange} className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center">
                              {
                                    editForm ? (
                                        <option selected value="" >{editForm?.UnidadComponente}</option>
                                    ) : ( 
                                        <option selected value="">-- seleccione --</option>
                                    )
                                }  
                                {
                                unidades?.map((item) => (
                                    <option value={item.id} key={item.id}>{item.descripcion}</option>
                                ))
                                }
                           </select>
                        </div>
                        
                        <input type="submit"  value={id ? 'Editar' : 'Guardar'} className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />

                    </form>
        </div>
    </div>
  )
}

export default CreateFormulation