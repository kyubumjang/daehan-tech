import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
