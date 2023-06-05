import {createBrowserRouter} from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import Home from './views/Home';
import Login from './views/Login';
import Orders from './views/Orders';
import OrdersOut from './views/OrdersOut';
import OutofStockProducts from './views/OutofStockProducts';
import Products from './views/Products';
import Register from './views/Register';

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true, //Cargar Componente Home, si es false caraga Layout
                    element: <Home/>
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout/>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login/>
                },
                {
                    path: '/auth/register',
                    element: <Register/>
                },  

            ]
        }, 
        {
            path: '/admin',
            element: <AdminLayout/>, 
            children: [
                {
                    index: true, 
                    element: <Orders/>
                }, 
                {
                    path: '/admin/orders-out',
                    element: <OrdersOut/>
                },
                {
                    path: '/admin/products', 
                    element: <Products/>
                },
                {
                    path: '/admin/products-out',
                    element: <OutofStockProducts/>
                }

            ]
        }
]);

export default router; 