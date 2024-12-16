import { NavLink, Outlet } from "react-router";

const Layout = () => {
    const getClassNames = ({ isActive }: { isActive: boolean }) => {
      return isActive ? "text-red-600" : "";
    }
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-8">
          <NavLink className={getClassNames} to='/'>Home</NavLink>
          <NavLink className={getClassNames} to='/battle'>Battle</NavLink>
          <NavLink className={getClassNames} to='/heroes'>Heroes</NavLink>
        </ul>
      </nav>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
