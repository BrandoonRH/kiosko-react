import { Link } from "react-router-dom"
import { useAuth } from '../hooks/useAuth';
import { useLocation } from "react-router-dom";


const AdminSidebar = () => {
    const {logout, user} = useAuth({middleware: 'auth'}); 
    const location = useLocation();
    const currentPath = location.pathname;
    
  return (
   <aside className="md:e-72 h-screen overflow-auto">
        <div className='p-4'>
            <Link to="/admin">
                <img src="/img/logo-burguers.svg" alt="Imagen Logotipo" className="w-44 rounded-full"/>
            </Link>
        </div>
        <p data-cy="nameUserHome" className='my-5 text-xl text-center font-bold text-indigo-700'>Hola: {user?.name}</p>
        {user?.admin ? (
          <div className='flex justify-center'>
                <Link to="/"
                    className='p-3 bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-center rounded-md '
                >
                    Punto de Venta
                </Link>
          </div>
        ) : (
            <></>
        )}
        <nav className="flex flex-col p-4">
                <Link to="/admin"  className={currentPath === '/admin' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'} >Ordenes</Link>
                <Link to="/admin/orders-out"  className={currentPath === '/admin/orders-out' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Ordenes Completadas</Link>
                <Link to="/admin/products"  className={currentPath === '/admin/products' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Productos</Link>
                <Link to="/admin/products-out"  className={currentPath === '/admin/products-out' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Productos Agotados</Link>
                <Link to="/admin/users" className={currentPath === '/admin/users' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Usuarios</Link>
                <Link to="/admin/warehouse" className={currentPath === '/admin/warehouse' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Movimientos Almacén</Link>
                <Link to="/admin/products-warehouse" className={currentPath === '/admin/products-warehouse' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Productos Almacén</Link>
                <Link to="/admin/formulations" className={currentPath === '/admin/formulations' ? ' bg-amber-500 my-5 text-center p-3  rounded-md font-bold text-lg ' : 'hover:bg-amber-500 my-5 text-center p-3 bg-amber-300 rounded-md font-bold text-lg'}>Formulaciones</Link>
        </nav>
        <div className="my-5 px-5">
            <button
                    type="button"
                    className='text-center rounded-md bg-red-500 w-full p-3 font-bold text-white truncate'
                    onClick={logout}
            >
                Cerrar Sesión
            </button>
        </div>
   </aside>
  )
}

export default AdminSidebar