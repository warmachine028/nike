/** @format */
import {
  Cart,
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  ScrollToTopButton
} from './sections';
import Navbar from './components/Navbar';
import { useMenuContext } from './contexts/MenuContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ShoeDetails from './components/ShoeDetails.jsx';

const App = () => {
  const showMenu = useMenuContext();

  return (
    <Router>
      <main className={'scroll-smooth' + (showMenu ? 'fixed z-40 h-screen overflow-hidden touch-none' : 'relative')}>
        <Navbar />
        <Routes>
          <Route
            path={'/'}
            element={
              <>
                <Menu />
                <section>
                  <div className={`padding-x py-6 lg:py-8 z-10 w-full`} />{' '}
                  {/* This is a hack to prevent the navbar from jumping when the user scrolls to the top of the page */}
                  <Hero />
                  <PopularProducts />
                  <ScrollToTopButton />
                  <SuperQuality />
                  <Services />
                  <SpecialOffers />
                  <CustomerReviews />
                  <Subscribe />
                </section>
              </>
            }
          />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/shoe_details'} element={<ShoeDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
