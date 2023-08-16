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
import Users from './views/Users';
import Warehouse from './views/Warehouse';
import ProductsWarehouse from './views/ProductsWarehouse';
import Formulations from './views/Formulations';


/**Views Create Register */
import CreateUser from './views/create/CreateUser';
import CreateMovement from './views/create/CreateMovement';
//import CreateDetailedMovement from './views/create/CreateDetailedMovement';
import CreateRawMaterials from './views/create/CreateRawMaterials';
import CreateFinishedProduct from './views/create/CreateFinishedProduct';
import CreateFormulation from './views/create/CreateFormulation';

/** Dashboards*/
import DashboardWarehouse from './views/dashboards/DashboardWarehouse';
import DashboardProducts from './views/dashboards/DashboardProducts';
import DashboardFormulations from './views/dashboards/DashboardFormulations';


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
                },
                {
                    path: '/admin/users',
                    element: <Users/>
                },
                {
                    path: '/admin/warehouse',
                    element: <Warehouse/>
                },
                {
                    path: '/admin/products-warehouse',
                    element: <ProductsWarehouse/>
                },
                {
                    path: '/admin/formulations',
                    element: <Formulations/>
                }

            ]
        },
        {
            path: '/admin/create',
            element: <AdminLayout/>, 
            children: [
                {
                    path: '/admin/create/users',
                    element: <CreateUser/>
                },
                {
                    path: '/admin/create/movement-warehouse',
                    element: <CreateMovement/>
                },
               /* {
                    path: '/admin/create/detailed-movement',
                    element: <CreateDetailedMovement/>
                },*/
                {
                    path: '/admin/create/finished-product',
                    element: <CreateFinishedProduct/>
                },
                {
                    path: '/admin/create/material',
                    element: <CreateRawMaterials/>
                },
                {
                    path: '/admin/create/formulation',
                    element: <CreateFormulation/>
                },
            ]
        }, 
        {
            path: '/admin/dasboard',
            element: <AdminLayout/>, 
            children: [
                {
                    path: '/admin/dasboard/warehouse-movements',
                    element: <DashboardWarehouse/>
                },
                {
                    path: '/admin/dasboard/products-warehouse',
                    element:   <DashboardProducts/>
                },
                {
                    path: '/admin/dasboard/formulations',
                    element:  <DashboardFormulations/>
                }
            

            ]
        },
]);

export default router; 