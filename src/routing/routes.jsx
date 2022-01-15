/* eslint-disable */
import Homepage from "../pages/homepage";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import MensShoesPage from "../pages/mens-shoes-page";
import WomensShoesPage from "../pages/womens-shoes-page";
import { PUBLIC, VISITOR} from "./auth-types";
import Blog from '../pages/blog'

export const HomeRoute = {
  title: 'Home',
  path: '/',
  type: PUBLIC,
  page: <Homepage />,
};

export const MensPageRoute = {
  title: 'Mens',
  path: '/man-shoes-page',
  type: PUBLIC,
  page: <MensShoesPage />,
};

export const WomensPageRoute = {
  title: 'Womens',
  path: '/women-shoes-page',
  type: PUBLIC,
  page: <WomensShoesPage />,
};

export const BlogRoute = {
  title: 'Blog',
  path: '/blog',
  type: PUBLIC,
  page: <Blog />,
};

export const LoginRoute = {
  title: 'Login',
  path: '/login',
  type: VISITOR,
  page: <LoginPage />,
};

export const RegisterRoute = { 
  title: 'Register',
  path: '/register',
  type: VISITOR,
  page: <RegisterPage />,
};

export const pageLayoutRoutes = [
  HomeRoute,
  LoginRoute,
  RegisterRoute,
  MensPageRoute,
  WomensPageRoute,
  BlogRoute,
];