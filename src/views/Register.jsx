import { createRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const Register = () => {
    const {register} = useAuth({middleware: 'guest', url: '/'}); 
    const nameRef = createRef(); 
    const emailRef = createRef(); 
    const passwordRef= createRef(); 
    const passwordConfirmationRef = createRef();  

    const [errors, setErrors] = useState([]); 
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async e => {
      e.preventDefault(); 
      setLoading(true);
      const data = {
        name: nameRef.current.value, 
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value
      }
      const response = await register(data, setErrors); 
      setLoading(response); 
    }

  return (
    <>
      <h1 data-cy="titleRegister" className="text-4xl font-black">Crea tu Cuenta</h1>
      <p data-cy="paragraphRegister" >Crea tu cuenta llenando el formulario</p>

      {loading ? (
         <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
              <Spinner text="Cargando..."/>
         </div>
      ) : (
       <>
       <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form 
            onSubmit={handleSubmit}
            noValidate
            data-cy="formRegister"
        >

          {errors ? errors.map((error, i)=> <Alert  key={i}>{error}</Alert>) : null }

            <div className="mb-4">
                <label data-cy="labelName" htmlFor="name" className="text-slate-600">Nombre:</label>
                <input data-cy="inputName" ref={nameRef} type="text" name="name" placeholder="Tu Nombre" className="mt-2 w-full p-3 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label data-cy="labelEmail" htmlFor="email" className="text-slate-600">Email:</label>
                <input data-cy="inputEmail" ref={emailRef} type="email" name="email" placeholder="Tu Email" className="mt-2 w-full p-3 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label data-cy="labelPassword" htmlFor="password" className="text-slate-600">Password:</label>
                <input data-cy="inputPassword" ref={passwordRef} type="password" name="password" placeholder="Tu Password" className="mt-2 w-full p-3 bg-gray-100"/>
            </div>
            <div className="mb-4">
                <label data-cy="labelPasswordConfirmation" htmlFor="password_confirmation" className="text-slate-600">Repite tu Password:</label>
                <input data-cy="inputPasswordConfirmation" ref={passwordConfirmationRef} type="password" name="password_confirmation" placeholder="Vuelve a ingresar tu password" className="mt-2 w-full p-3 bg-gray-100"/>
            </div>
              <input data-cy="inputSubmit" type="submit" value="Crear Cuenta" className="rounded-md bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
        </form>
        </div>
        <nav className="mt-5">
          <Link data-cy="linkLogin" to="/auth/login">
            ¿Ya tienes cuenta? Inicia Sesión
          </Link>
        </nav>
       </>
      )}

      
    </>
  )
}

export default Register