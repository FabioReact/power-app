import { NavLink, Outlet } from 'react-router';
import { useAppSelector } from '../redux/hooks';

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

type Link = {
  path: string;
  label: string;
  visibility: LinkVisibility;
};

const Layout = () => {
  const connected = useAppSelector((state) => state.auth.connected);
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-red-600' : '';
  };

  const links: Link[] = [
    { path: '/', label: 'Home', visibility: LinkVisibility.PUBLIC },
    { path: '/battle', label: 'Battle', visibility: LinkVisibility.PUBLIC },
    { path: '/heroes', label: 'Heroes', visibility: LinkVisibility.PUBLIC },
    { path: '/search-heroes', label: 'Search', visibility: LinkVisibility.PUBLIC },
    { path: '/learning/useref', label: 'UseRef', visibility: LinkVisibility.PUBLIC },
    { path: '/learning/usecounter', label: 'UseCounter', visibility: LinkVisibility.PUBLIC },
    { path: '/learning/useeffect', label: 'UseEffect', visibility: LinkVisibility.PUBLIC },
    { path: '/learning/optimisations', label: 'Optimisations', visibility: LinkVisibility.PUBLIC },
    { path: '/login', label: 'Login', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { path: '/register', label: 'Register', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { path: '/profile', label: 'Profile', visibility: LinkVisibility.AUTHENTICATED },
    { path: '/logout', label: 'Logout', visibility: LinkVisibility.AUTHENTICATED },
  ];

  return (
    <>
      <nav>
        <ul className='flex justify-center gap-8'>
          {links
            .filter(
              (link) =>
                link.visibility === LinkVisibility.PUBLIC ||
                link.visibility ===
                  (connected ? LinkVisibility.AUTHENTICATED : LinkVisibility.NOT_AUTHENTICATED),
            )
            .map((link) => (
              <li key={link.path}>
                <NavLink className={getClassNames} to={link.path}>
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <main className=''>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
