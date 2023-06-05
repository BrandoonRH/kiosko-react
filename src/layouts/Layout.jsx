import {Outlet} from 'react-router-dom'
import ReactModal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../components/Sidebar'
import Resum from '../components/Resum'
import useKiosko from '../hooks/useKiosko'
import ModalProduct from '../components/ModalProduct'
import { useAuth } from '../hooks/useAuth'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
ReactModal.setAppElement('#root'); 

const Layout = () => {
  const {user, error} = useAuth({middleware: 'auth'}); 
  const {modal, handleClickModal} = useKiosko(); 
 
  return (
      <>
          <div className='md:flex'>
              <Sidebar/>
                <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
                  <Outlet/>
                </main>
              <Resum/>
          </div>
          
            <ReactModal isOpen={modal} style={customStyles}>
              <ModalProduct/>
            </ReactModal>

          <ToastContainer/>
          
      </>
  )
}

export default Layout