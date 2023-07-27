import Category from './Category'
import useKiosko from '../hooks/useKiosko'
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {logout, user} = useAuth({middleware: 'auth'}); 
    const {categories} = useKiosko();

  return (
    <aside className='md:w-72'>
        <div className="p-4">
           <img src="/img/logo-burguers.svg" alt="Imagen Logotipo" className="w-44 rounded-full"/>
        </div>
        <p data-cy="nameUserHome" className='my-5 text-xl text-center font-bold text-indigo-700'>Hola: {user?.name}</p>
        {user?.admin ? (
          <div className='flex justify-center'>
                <Link to="/admin"
                    className='p-3 bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-center rounded-md '
                >
                    Panel de Administración
                </Link>
          </div>
        ) : (
            <></>
        )}
        <div className="mt-10">
            {categories.map((category) => (
                <Category
                    category={category} //pasar el prop
                    key={category.id}
                />
            ))}
        </div>  
        <div className='my-5 px-5'>
             <button
                data-cy="buttonCancelOrden"
                type="button"
                className='text-center rounded-md bg-red-500 w-full p-3 font-bold text-white truncate'
                onClick={logout}
             >Cancelar Orden</button>
        </div>
    </aside>
  )
}

export default Sidebar