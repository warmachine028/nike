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
import { useState } from 'react';
import Signin from './sections/Signin';
import Signup from './sections/Signup';
import ProductsPage from './sections/ProductsPage';
import SingleProduct from './components/SingleProduct';
import { SnackbarProvider } from 'notistack';
import './App.scss';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true);
  }
  function handleHideCart() {
    setShowCart(false);
  }
  return (
    <div id="🔥App">
      <SnackbarProvider autoHideDuration={1500} />
      <Router>
        <main id="🔥App__X" className={''}>
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
                    <section id="🔥App__X__X">
                      <div id="🔥App__X__X__X" />{' '}
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
            <Route path={'/single_product/:id'} element={<SingleProduct />} />
            <Route path={'/login'} element={<Signin />} />
            <Route path={'/register'} element={<Signup />} />
            <Route path={'/products'} element={<ProductsPage />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
