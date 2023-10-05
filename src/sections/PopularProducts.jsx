import ProductCard from '../components/ProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section className="padding">
      <div id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our
            <span className="text-coral-red"> Popular </span>
            Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-gray-400">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, and
            value
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
