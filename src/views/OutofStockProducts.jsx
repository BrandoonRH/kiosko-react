import useSWR from 'swr'
import clientAxios from '../config/axios'
import Product from "../components/Product"
import Spinner from '../components/Spinner'

const OutofStockProducts = () => {
    const token = localStorage.getItem('AUTH_TOKEN'); 
    const fetcher = () => clientAxios('/products-out',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(data => data.data); 
  
    const {data, error, isLoading} = useSWR('/api/products-out', fetcher, {refreshInterval: 1000}); 
  
    if(isLoading) return (
      <Spinner text="Cargando Productos Agotados..."/>
    );
  
    console.log(data.data); 
  
  
    return (
      <div>
          <h1 className='text-4xl font-black'>Productos Agotados</h1>
          <p className='text-2xl my-10'>
            Productos que ya no se encuentran con disponibilidad.
          </p>
          {data.data.length === 0 ? (
            <h1 className='text-2xl text-slate-700 font-bold uppercase text-center'>Todos los Productos están Disponibles</h1>
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {data.data.map(product => (
                    <Product
                      key={product.imagen}
                      product={product}
                      buttonProductAvailable={true}
                    />
                ))}
             </div>
          )}
        
      </div>
    )
}

export default OutofStockProducts