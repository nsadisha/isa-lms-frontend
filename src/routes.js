import { createBrowserRouter } from 'react-router-dom';
import Error404 from './views/Error404';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home title='Home' />,
    },
    {
      path: "/login",
      element: <Login title='Login'/>,
    },
    {
      path: "/register",
      element: <Register title='Register' />
    },
    {
      path: "/*",
      element: <Error404 title="Oops! Page not found!" />
    }
  ]);


export default routes;