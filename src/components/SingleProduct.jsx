import { products } from '../constants/index.js';
import ProductCard from './ProductCard.jsx';
import SingleProductCard from './SingleProductCard.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './SingleProduct.scss';

const SingleProduct = () => {
  const currentURL = useLocation();
  const urlString = currentURL.pathname;
  const parts = urlString.split('/');
  const urlProductId = parseInt(parts[parts.length - 1]);
  console.log(urlProductId);

  useEffect(() => {}, [urlProductId]);

  return (
    <div id="🔥SingleProduct">
      <div id="🔥SingleProduct__X">
        <div id="🔥SingleProduct__X__X">
          <section id="🔥SingleProduct__X__X__X">
            <div id="🔥SingleProduct__X__X__X__X">
              {/* <div className="mt-16"> */}
              {products.map(
                (product) => product.productId == urlProductId && <SingleProductCard key={product.name} {...product} />
              )}
              {/* </div> */}
            </div>
          </section>
        </div>
      </div>

      <div id="🔥SingleProduct__X2">
        <div id="🔥SingleProduct__X2__X">
          <div id="🔥SingleProduct__X2__X__X">
            <h2 id="🔥SingleProduct__X2__X__X__H2">Similar Products You Might Enjoy</h2>
          </div>
          <div id="🔥SingleProduct__X2__X__X2">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
