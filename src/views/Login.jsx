import { createRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";

const Login = () => {

  const {login, isLoading} = useAuth({
    middleware: 'guest',
    url: '/'
  }); 
  
  const emailRef = createRef(); 
  const passwordRef= createRef(); 

  const [errors, setErrors] = useState([]); 
  const [loading, setLoading] = useState(false); 
  
  const handleSubmit = async e => {
    e.preventDefault(); 
    setLoading(true);
    const data = {  
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    const response = await login(data, setErrors);
    setLoading(response);
  }//fin handleSubmit
  
  return (
    <>
      <h1 data-cy="title" className="text-4xl font-black">Iniciar Sesión</h1>
      <p data-cy="paragraphLogin">Para Administrar Master Burguer, Inicia Sesión</p>
      {loading ? (
         <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
              <Spinner text="Redirigiendo..."/>
         </div>
      ) : (
       <>
          <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-cy="formLogin"
                >
                  {errors ? errors.map((error, i)=> <Alert key={i}>{error}</Alert>) : null }
                  <div className="mb-4">
                      <label data-cy="labelEmail" htmlFor="email" className="text-slate-600">Email:</label>
                      <input data-cy="inputEmail" ref={emailRef} type="email" name="email" placeholder="Tu Email" className="mt-2 w-full p-3 bg-gray-100"/>
                  </div>
                  <div className="mb-4">
                      <label data-cy="labelPassword" htmlFor="password" className="text-slate-600">Password:</label>
                      <input data-cy="inputPassword" ref={passwordRef} type="password" name="password" placeholder="Tu Password" className="mt-2 w-full p-3 bg-gray-100"/>
                  </div>
                
                  <input data-cy="inputSubmitSession" type="submit" value="Iniciar Sesión" className="bg-indigo-600 rounded-md hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
                </form>
          </div>
          <nav className="mt-5">
              <Link data-cy="linkRegister" to="/auth/register">
                ¿Aún no tienes cuenta? Registrate
              </Link>
          </nav>
       </>
      )}
      
  </>
  )
}

export default Login