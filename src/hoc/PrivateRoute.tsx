import { Navigate, Outlet } from 'react-router';
import { useAuthContext } from '../contexts/auth-context';

const PrivateRoute = () => {
  const { connected } = useAuthContext();

  if (!connected) {
    return <Navigate to='/login' state={{ from: '/login' }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
