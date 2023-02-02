import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/index.css';

import { RouterProvider, } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
