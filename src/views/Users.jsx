import { Link } from "react-router-dom"
import Add from "../components/Add"
import UsersData from "../data/UsersData"
import User from "../components/User"

const Users = () => {
   

  
    return (
      <div>
          <div className='flex  items-center gap-2'>
             <h1 className='text-4xl font-black'>Usuarios del Sistema</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
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
                        <th className="border border-slate-600 bg-gray-300 ">Nombre(s)</th>
                        <th className="border border-slate-600 bg-gray-300">Apellido(s)</th>
                        <th className="border border-slate-600 bg-gray-300 ">Usuario</th>
                        <th className="border border-slate-600 bg-gray-300 ">E-mail</th>
                        <th className="order border-slate-600 bg-gray-300">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="">

                    {
                      UsersData.map((user) => (
                        <User 
                          key={user.id}
                          id={user.id}
                          nombres={user.nombres}
                          apellidos={user.apellidos}
                          usuario={user.usuario}
                          email={user.email}
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