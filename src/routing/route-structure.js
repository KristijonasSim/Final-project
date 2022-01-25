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
        path: 'women',
        pageName: 'WomensShoesPage',
        auth: VISITOR,

      },
      {
        path: 'men',
        pageName: 'MensShoesPage',
        auth: VISITOR,

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
        path: 'blog',
        pageName: 'Blog',
        auth: LOGGED_IN,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },
];
