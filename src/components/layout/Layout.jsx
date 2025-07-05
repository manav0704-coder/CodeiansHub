import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow flex-1 w-full fade-in" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 