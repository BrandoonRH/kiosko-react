import useSWR from 'swr'
import clientAxios from '../config/axios'
import Product from "../components/Product"
import Spinner from '../components/Spinner'


const Products = () => {
  const token = localStorage.getItem('AUTH_TOKEN'); 
  const fetcher = () => clientAxios('/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data); 

  const {data, error, isLoading} = useSWR('/api/products', fetcher, {refreshInterval: 1000}); 

  if(isLoading) return (
    <Spinner text="Cargando Productos Disponibles..."/>
  );

  


  return (
    <div>
        <h1 className='text-4xl font-black'>Productos</h1>
        <p className='text-2xl my-10'>
          Maneja los Productos desde aquí.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.data.map(product => (
              <Product
                key={product.imagen}
                product={product}
                buttonSoldOut={true}
              />
          ))}
      </div>
    </div>
  )
}

export default Products






