import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from './views/CourseDetails';
import Dashboard from './views/Dashboard';
import Error404 from './views/Error404';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Register from './views/Register';

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home title='Home' />,
	},
	{
		path: "/login",
		element: <Login title='Login' />,
	},
	{
		path: "/register",
		element: <Register title='Register' />
	},
	{
		path: "/logout",
		element: <Logout title='Logout' />
	},
	{
		path: "/profile",
		element: <Profile title='Profile' />
	},
	{
		path: "/dashboard",
		element: <Dashboard title='Dashboard' />
	},
	{
		path: "/course/:courseId",
		element: <CourseDetails title='Course details' />
	},
	{
		path: "/*",
		element: <Error404 title="Oops! Page not found!" />
	}
]);


export default routes;