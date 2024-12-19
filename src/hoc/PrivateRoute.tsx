import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '../redux/hooks';

const PrivateRoute = () => {
  const connected = useAppSelector((state) => state.auth.connected);

  if (!connected) {
    return <Navigate to='/login' state={{ from: '/login' }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
