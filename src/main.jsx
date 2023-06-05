import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { KioskoProvider } from './context/KioskoProvider'
import './css/Spinner.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <KioskoProvider>
        <RouterProvider router={router}/>
      </KioskoProvider>
  </React.StrictMode>,
)
