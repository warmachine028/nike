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
import Signin from './sections/Signin';
import Signup from './sections/Signup';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true);
  }
  function handleHideCart() {
    setShowCart(false);
  }
  return (
    <Router>
      <main className={'scroll-smooth z-40 h-fit overflow-hidden relative'}>
        <Navbar handleClick2={handleHideCart} handleClick={handleShowCart} />
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
          <Route path={'/login'} element={<Signin />} />
          <Route path={'/register'} element={<Signup />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
