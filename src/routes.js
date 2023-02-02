import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);


export default routes;