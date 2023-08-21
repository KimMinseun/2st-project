import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Wrap } from 'style/StyleLayout';

const BaseLayout = () => {
  const location = useLocation();

  return (
    <>
      <Wrap location={location}>
        <Header />
        <Outlet />
      </Wrap>
      <Footer />
    </>
  );
};

export default BaseLayout;
