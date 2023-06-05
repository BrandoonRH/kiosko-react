import {Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>
        <img src="../img/logo.svg" alt="Imagen Logotipo" className='max-w-sm'/>

        <div className='p-10 w-fuññ'>
            <Outlet/>
        </div>
    </main>
  )
}

export default AuthLayout