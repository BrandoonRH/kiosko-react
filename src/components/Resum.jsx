import { useState } from 'react';
import { formatMoney } from '../helpers';
import useKiosko from '../hooks/useKiosko'
import ResumProduct from './ResumProduct';
import { useAuth } from '../hooks/useAuth';
import Spinner from './Spinner';

const Resum = () => {
  const {order, total, handleSubmitNewOrder} = useKiosko(); 
  const {logout} = useAuth({});
  const [loading, setLoading] = useState(false); 

  const checkOrder =  () => order.length === 0; 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    const state = await handleSubmitNewOrder(logout); 
    setLoading(state); 
  }
  
  return (
    <aside className='md:w-72 h-screen overflow-y-scroll p-5'>
        <h1 className="text-4xl font-black">
          Mi Pedido
        </h1> 
        <p className="text-lg">
            Aquí podras ver el resumen y totales de tu pedido
        </p>
        <div className="py-10">
            {order.length === 0 ? (
                <p className='text-center text-2xl'>
                  No hay Elementos en tu Pedido aún
                </p>
            ) : (
              order.map(product => (
                  <ResumProduct
                    product={product}
                    key={product.id}
                  />
              ))
            )}
        </div>
        <p className="text-xl mt-10">Total: {' '}{formatMoney(total)}</p>
       {loading ? (
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <Spinner text="Procesando Orden"/>
        </div>
       ):(
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mt-5">
              <input type="submit"
                    value="Confirmar Orden"
                    className={`${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-700 cursor-pointer'}  font-bold  px-5 py-2 rounded-md uppercase text-white text-center w-full`}
                    disabled={checkOrder()}
              />
          </div>
        </form>
       )}
    </aside>
  )
}

export default Resum