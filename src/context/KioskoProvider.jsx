import { createContext, useState, useEffect } from "react"
import clientAxios from "../config/axios";
import {toast} from 'react-toastify'
const KioskoContext = createContext(); 
import Swal from 'sweetalert2'; 
//Primero asegurate que funcione después busca la forma de escribir menos codigo 


const KioskoProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [categoryCurrent, setCategoryCurrent] = useState({}); 
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({}); 
    const [order, setOrder] = useState([]); 
    const [total, setTotal]  = useState(0);

    const handleClickCategory = (id) => {
        const category = categories.filter(category => category.id === id)[0]; 
        setCategoryCurrent(category); 
    } 

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProduct = product => {
        setProduct(product)
    }
    const handleAddOrder = ({categoria_id,  ...product}) => {
            if(order.some(ordersSate => ordersSate.id === product.id)){
                const orderUpdate = order.map(ordersSate => ordersSate.id === product.id ? product : ordersSate)
                setOrder(orderUpdate); 
                toast.success('Guardado Correctamente'); 
            } else{
                setOrder([...order, product]); 
                toast.success('Agregado Correctamente'); 
            }
    }

    const handleEditAmount = id => {
        const productUpdate = order.filter(product =>  product.id === id)[0]; 
        setProduct(productUpdate); 
        setModal(!modal); 
    }

    const handleDeleteProductOrder = id => {
        const orderUpdate = order.filter(product => product.id !== id); 
        setOrder(orderUpdate); 
        toast.success('Producto Eliminado'); 
    }

    const handleSubmitNewOrder = async (logout) => {
        const token = localStorage.getItem('AUTH_TOKEN'); 
        try {   
            const data = await clientAxios.post('/orders',{
                    total,
                    products: order.map(product => {
                        return{
                            id: product.id,
                            amount: product.amount
                        }
                    }), 
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            toast.success(data.message); 
            setTimeout(() => {
                setOrder([]);
            }, 1000);


            //Close Session
            setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN'); 
                logout(); 
            }, 2500);
            return true; 
        } catch (error) {
            console.log(error)
        }
    }

    
    //Get Categories from BackEnd 
    const getCategories = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const {data} = await clientAxios('/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            setCategories(data.data); 
            setCategoryCurrent(data.data[0]); 
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickCompletOrder = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            await clientAxios.put(`/orders/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'La Orden se ha Completado',
                showConfirmButton: true,
                timer: 1500
              })
        } catch (error) {
            console.log(error); 
        }
    }

    const deleteOrderComplete = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            const response = await clientAxios.delete(`/orders/${id}`,{
                 headers: {
                     Authorization: `Bearer ${token}`
                 }
             }); 
            
            return response.data.message;
         } catch (error) {
             console.log(error); 
         }
    }

    const handleClickDeleteCompletOrder = async (id) => {
        Swal.fire({
            title: '¿Seguro que desea Eliminar la Orden?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No Eliminar`,
        }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                   deleteOrderComplete(id);
                Swal.fire(`Orden Eliminada`, '', 'success')
                } else if (result.isDenied) {
                Swal.fire('No se Elimino la Orden', '', 'info')
                }
        }); 
       
    }
    
    const handleClickChangeProductStatus = async (id) => {
         const token = localStorage.getItem('AUTH_TOKEN'); 
        try {
            await clientAxios.put(`/products/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El Estado del Producto a Cambiado',
                showConfirmButton: true,
                timer: 1500
              })
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.precio * product.amount) + total, 0); 
        setTotal(newTotal); 
    },[order]);


    useEffect(() => {
        getCategories(); 
    },[])

   return(
        <KioskoContext.Provider
            value={{
                categories,
                categoryCurrent,
                handleClickCategory,
                handleClickModal,
                modal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleEditAmount,
                handleDeleteProductOrder,
                total,
                handleSubmitNewOrder,
                handleClickCompletOrder,
               handleClickChangeProductStatus,
               handleClickDeleteCompletOrder
            }}
        >
            {children}
        </KioskoContext.Provider>
    )
}

export {
    KioskoProvider
}

export default KioskoContext