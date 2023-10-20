import { products } from '../constants/index.js';
import ProductCard from './ProductCard.jsx';
import SingleProductCard from './SingleProductCard.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SingleProduct = () => {
  const currentURL = useLocation();
  const urlString = currentURL.pathname;
  const parts = urlString.split('/');
  const urlProductId = parseInt(parts[parts.length - 1]);
  console.log(urlProductId);

  useEffect(() => {}, [urlProductId]);

  return (
    <>
      <div className={'w-full h-full flex justify-center flex-row flex-wrap gap-5 mt-20'}>
        <div
          className={
            'flex justify-center flex-col align-center mt-2 lg:p-4 max-lg:w-1/2 max-md:p-0 max-md:w-9/12 max-sm:w-10/12'
          }
        >
          <section className="padding mt-8">
            <div className="max-container max-sm:mt-12">
              {/* <div className="mt-16"> */}
              {products.map(
                (product) => product.productId == urlProductId && <SingleProductCard key={product.name} {...product} />
              )}
              {/* </div> */}
            </div>
          </section>
        </div>
      </div>

      <div className={'flex justify-center align-center mt-12 bg-pale-blue dark:bg-slate-700'}>
        <div id="products" className=" m-12 mb-20 max-container max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-2xl font-palanquin font-bold dark:text-slate-200">Similar Products You Might Enjoy</h2>
          </div>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
