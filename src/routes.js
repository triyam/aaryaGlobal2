import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

import HomePage from './components/Homepage';
import Lorem from './components/Lorem';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },

    {
      path: '/home',
      element: <HomePage />,
      // children:[
      //   { path: 'app', element: <DashboardApp/> },
      // ],
    },

    {
      path: '/',
      // element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        // { path: 'home', element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: 'lorem', element: <Lorem /> },
        { path: 'userLogin', element: <UserLogin /> },
        { path: 'userRegister', element: <UserRegister /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
