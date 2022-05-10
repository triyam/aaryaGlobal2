// component
import Iconify from '../../dashboardComponents/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'golf user list',
    path: '/dashboard/golfuserlist',
    icon: getIcon('cil:golf-alt'),
  },
  {
    title: 'end user list',
    path: '/dashboard/enduserlist',
    icon: getIcon('bxs:user-pin'),
  },
  {
    title: 'travel agent list',
    path: '/dashboard/travelagentlist',
    icon: getIcon('zondicons:travel'),
  },
  {
    title: 'site seeing authority list',
    path: '/dashboard/siteseeinglist',
    icon: getIcon('fa:sitemap'),
  },
  {
    title: 'order form request list',
    path: '/dashboard/orderformreqlist',
    icon: getIcon('charm:git-request'),
  },
  {
    title: 'order list',
    path: '/dashboard/orderlist',
    icon: getIcon('icon-park-solid:transaction-order'),
  },
  {
    title: 'customer order form list',
    path: '/dashboard/custorderformlist',
    icon: getIcon('carbon:order-details'),
  },


  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
