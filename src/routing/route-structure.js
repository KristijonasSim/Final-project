import { VISITOR, LOGGED_IN } from './auth-types';

// eslint-disable-next-line import/no-anonymous-default-export
export default [

  {
    path: '/',
    pageName: 'PageLayout',
    children: [
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'Profile',
        pageName: 'ProfilePage',
        auth: LOGGED_IN,
      },
      {
        path: 'sneakers',
        pageName: 'SneakersPage',

      },
      {
        path: 'login',
        pageName: 'LoginPage',
        auth: VISITOR,
      },
      {
        path: 'register',
        pageName: 'RegisterPage',
        auth: VISITOR,
      },
      {
        path: 'products/:id',
        pageName: 'SingleShoePage',
        auth: LOGGED_IN,
      },
      {
        path: 'cart',
        pageName: 'Cart',
        auth: LOGGED_IN,
      },
      {
        path: 'checkout',
        pageName: 'Checkout',
        auth: LOGGED_IN,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },
];
