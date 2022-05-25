import { Navigate, useRoutes, useParams } from 'react-router-dom';
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
import ForgotPassword from './pages/Forgotpassword';
import UserForgotPassword from './pages/UserForgotpassword';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

import HomePage from './components/Homepage';
import Lorem from './components/Lorem';

import Mapbox from './components/Main/Mapbox';

import GolfUserList from './pages/GolfUserList';

import Blogpage from './components/Blogpage';
import CreateBlogSelf from './components/CreateBlogSelf';
import CreateBlogHtml from './components/CreateBlogHtml';
import UserDetailsForms from './components/UserDetailsForms';

import EndUserList from './pages/EndUserList';
import TravelAgentList from './pages/TravelAgentList';
import SiteSeeingAuthList from './pages/SiteSeeingAuthList';
import OrderFormReqList from './pages/OrderFormReqList';
import OrderList from './pages/OrderList';
import CustOrderFormList from './pages/CustOrderFormList';
import UserDashboard from './components/Dashboard/DashboardPage';
import MaterialForm from './components/Main/MaterialForm';
import EmailVerify from './pages/EmailVerify';

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
        { path: 'golfuserlist', element: <GolfUserList /> },
        { path: 'enduserlist', element: <EndUserList /> },
        { path: 'travelagentlist', element: <TravelAgentList /> },
        { path: 'siteseeinglist', element: <SiteSeeingAuthList /> },
        { path: 'orderformreqlist', element: <OrderFormReqList /> },
        { path: 'orderlist', element: <OrderList /> },
        { path: 'custorderformlist', element: <CustOrderFormList /> },
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
        { path: 'forgotpassword', element: <ForgotPassword /> },
        { path: 'userforgotpassword', element: <UserForgotPassword /> },
        {
          path: '/:serviceId/resetpassword/:resetToken',
          element: <ResetPassword />,
        },
        {
          path: '/:serviceId/:userId/verify/:token',
          element: <EmailVerify />,
        },
        { path: 'blogpage', element: <Blogpage /> },
        { path: 'createblogself', element: <CreateBlogSelf /> },
        { path: 'createbloghtml', element: <CreateBlogHtml /> },
        { path: 'userdetailsforms', element: <UserDetailsForms /> },
        { path: 'userdashboard', element: <UserDashboard /> },
        { path: 'materialform', element: <MaterialForm /> },

        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
