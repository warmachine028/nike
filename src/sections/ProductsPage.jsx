import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../constants';
import Navbar from '../components/Navbar';
import Cart from '../sections/Cart';
import './ProductsPage.scss';
const ProductsPage = () => {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true);
  }
  function handleHideCart() {
    setShowCart(false);
  }

  return (
    <main id="🔥ProductsPage">
      <Navbar handleClick2={handleHideCart} handleClick={handleShowCart} />
      {showCart ? (
        <Cart />
      ) : (
        <section id="🔥ProductsPage__X">
          <div id="🔥ProductsPage__X__X">
            <div id="🔥ProductsPage__X__X__X">
              <h2 id="🔥ProductsPage__X__X__X__H2">
                <span id="🔥ProductsPage__X__X__X__H2__Span"> Jordans </span>
              </h2>
            </div>
            <div id="🔥ProductsPage__X__X__X2">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductsPage;
