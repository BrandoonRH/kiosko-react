

const CreateUser = () => {
  return (
    <div>
        <h1 className="text-4xl text-center font-black">Crea un nuevo usuario</h1>
       
       <div className="container mx-auto  p-10 mt-10">
                <form action="" className=" w-8/12 mx-auto space-y-5 p-5">
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="names" className="font-bold text-center text-xl">Nombre(s):</label>
                        <input type="text" placeholder="Nombres del usuario"  id="names" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="lastnames" className="font-bold text-center text-xl">Apellido(s):</label>
                        <input type="text" placeholder="Apellidos del usuario"  id="lastnames" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="username" className="font-bold text-center text-xl">Nombre de Usuario:</label>
                        <input type="text" placeholder="username"  id="username" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="email" className="font-bold text-center text-xl">E-mail:</label>
                        <input type="email" placeholder="E-mail del Usuario"  id="email" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    <div className="flex flex-col bg-white p-3 rounded-md space-y-1">
                        <label htmlFor="password" className="font-bold text-center text-xl">Password:</label>
                        <input type="password" placeholder="Contraseña del Usuario"  id="password" className="p-2 border border-gray-400 rounded-md w-8/12 mx-auto text-center"/>
                    </div>
                    
                   
                    <input type="submit" value="Guardar" className=" w-full p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 transition-all cursor-pointer" />
                </form>
       </div>
    </div>
  )
}

export default CreateUser