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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ShoeDetails from './components/ShoeDetails.jsx';
import { useState } from 'react';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(!showCart);
  }
  return (
    <Router>
      <main className={'scroll-smooth z-40 h-fit overflow-hidden relative'}>
        <Navbar handleClick={handleShowCart} />
        <Routes>
          <Route
            path={'/'}
            element={
              <>
                <Menu />
                {showCart ? (
                  <Cart />
                ) : (
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
                )}
              </>
            }
          />
          <Route path={'/shoe_details'} element={<ShoeDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
