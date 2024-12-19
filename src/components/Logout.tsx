import { Navigate } from 'react-router';
import { useLayoutEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { onLogout } from '../redux/slices/auth';

const Logout = () => {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(onLogout());
  }, []);

  return <Navigate to='/login' />;
};

export default Logout;
