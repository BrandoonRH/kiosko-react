import { formatMoney } from '../helpers';
import useKiosko from '../hooks/useKiosko';


const Product = ({product, buttonAdd = false, buttonSoldOut = false, buttonProductAvailable = false}) => {
    const { handleClickModal, handleSetProduct,  handleClickChangeProductStatus } = useKiosko();
    const {nombre, imagen, precio, id} = product; 

    
  return (
    <div className="border p-3 shadow bg-white">
        <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`} className="w-full"/>
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>{formatMoney(precio)}</p>
            {buttonAdd && (
                <button
                    type='button'
                    className='bg-indigo-600 rounded-md hover:bg-indigo-800 text-white uppercase w-full mt-5 p-3 font-bold '
                    onClick={() => { 
                        handleClickModal(); 
                        handleSetProduct(product); 
                }}
                >
                    Agregar
                </button>
            )}
            {buttonSoldOut && (
                <button
                    type='button'
                    className='bg-indigo-600 rounded-md hover:bg-indigo-800 text-white uppercase w-full mt-5 p-3 font-bold '
                    onClick={() => { 
                        handleClickChangeProductStatus(id)
                }}
                >
                    Marcar como Agotado
                </button>
            )}
              {buttonProductAvailable && (
                <button
                    type='button'
                    className='bg-indigo-600 rounded-md hover:bg-indigo-800 text-white uppercase w-full mt-5 p-3 font-bold '
                    onClick={() => { 
                        handleClickChangeProductStatus(id) 
                }}
                >
                    Marcar como Disponible
                </button>
            )}
           
        </div>
    </div>
  )
}

export default Product