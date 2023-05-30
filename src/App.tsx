import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Register } from './pages/FormPages/Register/Register';
import { Login } from './pages/FormPages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';
import { Main } from './pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
