import { Outlet } from 'react-router-dom';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';

function Layout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
