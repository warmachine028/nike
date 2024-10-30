import ProductCard from '../components/ProductCard';
import { products } from '../constants';
import './PopularProducts.scss';

const PopularProducts = () => {
  return (
    <section id="🔥PopularProducts">
      <div id="🔥PopularProducts__X">
        <div id="🔥PopularProducts__X__X">
          <h2 id="🔥PopularProducts__X__X__H2">
            Our
            <span id="🔥PopularProducts__X__X__H2__Span"> Popular </span>
            Products
          </h2>
          <p id="🔥PopularProducts__X__X__P">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, and
            value
          </p>
        </div>
        <div id="🔥PopularProducts__X__X2">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
