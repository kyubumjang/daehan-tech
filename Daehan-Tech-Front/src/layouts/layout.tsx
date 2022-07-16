import { Outlet } from 'react-router-dom';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';
import Footer from '@components/molecules/Footer/Footer';

function Layout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
