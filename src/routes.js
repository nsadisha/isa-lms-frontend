import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello from Router</h1>,
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