import useSWR from 'swr'
import clientAxios from '../config/axios'
import Spinner from "../components/Spinner";
import {formatMoney} from "../helpers/index"
import useKiosko from "../hooks/useKiosko"; 

const Orders = () => {

  const token = localStorage.getItem('AUTH_TOKEN'); 
  const fetcher = () => clientAxios('/orders', {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }); 
  const {data, error, isLoading} = useSWR('/api/orders', fetcher, {refreshInterval: 1000}); 
  
  const {handleClickCompletOrder} = useKiosko(); 
  
  
  if(isLoading) return (
    <Spinner text="Cargando Ordenes..."/>
  );

  return (
    <div>
        <h1 className="text-4xl font-black">Ordenes</h1>
        <p className='text-2xl my-10'>
          Administra las Ordenes desde aquí.
        </p>

        {data.data.data.length === 0 ? (
          <h1 className='text-2xl text-slate-700 font-bold uppercase text-center'>No hay Ordenes Aún</h1>
        ) :(
          <div className='grid grid-cols-2 gap-3'>
              {data.data.data.map(order => (
                <div key={order.id} className="p-5 bg-white space-y-2 shadow-md border-b">
                  <p className='text-xl font-bold text-slate-600'>Contenido del Pedido</p>
                  {order.products.map(product => (
                    <div
                      key={product.id}
                      className="border-b border-b-slate-200 last-of-type:boder-none py-4"
                    >
                      <p>ID: {product.id}</p>
                      <p>{product.nombre}</p>
                      <p>
                          Cantidad: {''}
                          <span className='font-bold'>
                              {product.pivot.amount}
                          </span>
                      </p>
                    </div>
                  ))}
                  <p
                    className='text-lg font-bold text-slate-600-600'
                  >
                    Cliente: {''}
                    <span className='text-slate-400'>{order.user.name}</span>
                  </p>
                  <p className='text-lg font-bold text-amber-600'>
                    Total a Pagar: {''}
                    <span className='text-slate-600'>{formatMoney(order.total)}</span>
                  </p>
                  <button
                    type="button"
                    className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                    onClick={ () => handleClickCompletOrder(order.id) }
                  >
                    Completar
                  </button>
                </div>
              ))}
          </div>
        )}

     
    </div>
  )
}

export default Orders