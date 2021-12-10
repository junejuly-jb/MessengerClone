import { Navigate } from 'react-router-dom';
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'


const routes = (isLoggedIn) => [
     {
          path: '/home',
          element: isLoggedIn ? <Home /> : <Navigate to="/" />,
     },
     {
          path: '/',
          element: !isLoggedIn ? <Login /> : <Navigate to="/home" />
     },
];

export default routes;