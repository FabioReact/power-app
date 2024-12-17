import { NavLink, Outlet } from 'react-router';

const Layout = () => {
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-red-600' : '';
  };
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-8'>
          <NavLink className={getClassNames} to='/'>
            Home
          </NavLink>
          <NavLink className={getClassNames} to='/battle'>
            Battle
          </NavLink>
          <NavLink className={getClassNames} to='/heroes'>
            Heroes
          </NavLink>
          <NavLink className={getClassNames} to='/learning/useref'>
            UseRef
          </NavLink>
          <NavLink className={getClassNames} to='/learning/usecounter'>
            UseCounter
          </NavLink>
          <NavLink className={getClassNames} to='/learning/useeffect'>
            UseEffect
          </NavLink>
          <NavLink className={getClassNames} to='/login'>
            Login
          </NavLink>
          <NavLink className={getClassNames} to='/register'>
            Register
          </NavLink>
        </ul>
      </nav>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
