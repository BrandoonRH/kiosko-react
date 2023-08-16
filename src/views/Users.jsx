import { Link } from "react-router-dom"
import Add from "../components/Add"
import UsersData from "../data/UsersData"
import User from "../components/User"
import {HiOutlineUsers, HiOutlineChevronDoubleRight} from "react-icons/hi"
import useGetUsers from "../hooks/useGetUsers"

const Users = () => {

   //TODO Logica de la API

   const {data} = useGetUsers(); 
   console.log(data); 
  
    return (
      <div>
          <div className='flex  items-center gap-2'>
             <h1 className='text-4xl font-black'>Usuarios del Sistema</h1>
            <HiOutlineUsers size={36}/>
          </div>
          <p className='text-2xl my-10'>
            Administra los usuarios del sistema 
          </p>

      

        {/*Usuario*/}
        <div className="container mx-auto border border-red-500 p-10">
              <div className='mx-auto w-11/12 flex justify-around p-5 border border-black'>
                  <p className='text-2xl font-semibold'>Usuarios de Master´s Burguers</p>
                  <Link to="/admin/create/users">
                      <Add/>
                  </Link >
              </div>

              <div className=" mt-7 overflow-auto h-96  bg-gray-100 p-3 border border-gray-500">
              <table className="border-collapse border border-slate-500 w-full ">
                    <thead>
                      <tr>
                        <th className="border border-slate-600 bg-gray-300">ID</th>
                        <th className="border border-slate-600 bg-gray-300 ">Nombre</th>
                        <th className="border border-slate-600 bg-gray-300 ">Usuario</th>
                        <th className="border border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                    {
                      data?.map((user) => (
                        <User 
                          key={user.id}
                          id={user.id}
                          nombre={user.nombre}
                          usuario={user.usuario}
                        />
                      ))
                    }                     
                           
                    </tbody>
              </table>
              </div>
        </div>



        
      </div>
    )
}

export default Users