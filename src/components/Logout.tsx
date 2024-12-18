import { Navigate } from 'react-router';
import { useAuthContext } from '../contexts/auth-context';
import { useLayoutEffect } from 'react';

const Logout = () => {
  const { onLogout } = useAuthContext();
  useLayoutEffect(() => {
    onLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to='/login' />;
};

export default Logout;
