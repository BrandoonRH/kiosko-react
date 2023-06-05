import { useState } from "react";
import useSWR from 'swr'
import Product from "../components/Product"
import clientAxios from "../config/axios";
import useKiosko from "../hooks/useKiosko"
import Spinner from "../components/Spinner";

const Home = () => {  
  const {categoryCurrent, } = useKiosko(); 
  const token = localStorage.getItem('AUTH_TOKEN')
  
  //Consulta SWR
  const fetcher = () => clientAxios('/products', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data); 

  const {data, error, isLoading } = useSWR('/products', fetcher, {
    refreshInterval: 1000
  }); 
  
  if(isLoading) return (
    <Spinner text="Cargando Productos..."/>
  );

  const products = data?.data.filter(product => product.category_id === categoryCurrent.id); 

  return (
   <>
      <h1 className="text-4xl font-black">{categoryCurrent.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {products.map(product => (
              <Product
                key={product.imagen}
                product={product}
                buttonAdd={true}
              />
          ))}
      </div>
   </>
  )
}

export default Home