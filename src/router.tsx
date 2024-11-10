import {
  createBrowserRouter,
  redirect,
  LoaderFunction,
} from 'react-router-dom';
import { SignIn, SignUp, Home } from './pages';
import { getToken } from './utils/storage';

const checkAuth: LoaderFunction = () => {
  const token = getToken();
  if (!token) {
    throw redirect('/sign-in');
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: checkAuth,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

export default router;
