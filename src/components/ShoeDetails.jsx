import ua3shoe from '../assets/images/uacurry3.jpg';
import ua3shoe2 from '../assets/images/UACurry-3.png';
import ua3shoe3 from '../assets/images/UACurry3.1.png';
import ua3shoe4 from '../assets/images/UACurry3.2.png';
import Rating from './Rating.jsx';
import { products } from '../constants/index.js';
import ProductCard from './ProductCard.jsx';
import Menu from './Menu';

const ShoeDetails = () => {
  return (
    <>
      <Menu />
      <div id={'category'} className={'flex justify-start mt-8 ml-5 gap-3 text-sm text-gray-400 '}>
        <div>Men /</div>
        <div>Shoes /</div>
        <div>Sneakers /</div>
        <div>Basketball Shoes </div>
      </div>
      <div id={'shoe_container'} className={'w-full h-full flex justify-center flex-row flex-wrap gap-5 mt-10'}>
        <div
          id={'imageContainer'}
          className={
            'flex justify-center align-center flex-col m-8 mt-0 gap-10 w-1/2 max-lg:w-2/3 max-md:w-9/12 max-sm:w-10/12'
          }
        >
          <div id={'mainImage'} className={'flex justify-center w-full mt-14'}>
            <img src={ua3shoe} alt={'ua curry 3'} width={'500'} />
          </div>
          <div id={'imageSlider'} className={'flex justify-center flex-row overflow-auto w-full h-24 p-1'}>
            <img src={ua3shoe} alt={'ua curry 3'} className={'border border-solid-grey'} />
            <img src={ua3shoe2} alt={'ua curry 3'} className={'border border-solid-grey'} />
            <img src={ua3shoe4} alt={'ua curry 3'} className={'border border-solid-grey'} />
            <img src={ua3shoe} alt={'ua curry 3'} className={'border border-solid-grey'} />
            <img src={ua3shoe3} alt={'ua curry 3'} className={'border border-solid-grey'} />
          </div>
        </div>
        <div
          id={'descriptionContainer'}
          className={
            'flex justify-center flex-col align-center mt-2 lg:p-4 max-lg:w-1/2 max-md:p-0 max-md:w-9/12 max-sm:w-10/12'
          }
        >
          <div className={'flex justify-center flex-col align-center'}>
            <div className={'flex justify-center flex-col align-start'}>
              <p className={'text-3xl font-bold max-sm:w-full'}>UA CURRY 3</p>
              <p className={'text-lg font-semibold leading-3 pb-5 max-sm:w-full'}>Mens Basketball Shoes</p>
              <div className={'flex flex-row text-lg max-sm:w-full'}>
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'empty'} />
              </div>
            </div>
            <div className={'flex justify-center align-start flex-col mb-8'}>
              <p className={'text-lg font-semibold mt-5 max-sm:w-full'}>INFINITE SUPPORT. TOTAL CONTROL.</p>
              <p className={'text-base font-medium text-gray-400 text-left mt-2 w-96  max-sm:w-full'}>
                Threadborne™ upper delivers lightweight directional strength to support the games most brilliant
                player. Stephen Curry.
              </p>
            </div>
            <div
              className={
                'flex justify-between align-start flex-row gap-4 max-lg:gap-10 max-md:gap-2 max-sm:flex-col max-sm:gap-5'
              }
            >
              <div className={'w-full flex align-start flex-row gap-3 max-lg:w-1/2'}>
                <div className={'w-5 h-5 bg-blue-600 mt-2 hover:bg-blue-500 hover:cursor-pointer'} />
                <div className={'w-5 h-5 bg-lime-400 mt-2 hover:bg-lime-300 hover:cursor-pointer'} />
                <div className={'w-5 h-5 bg-pink-400 mt-2 hover:bg-pink-300 hover:cursor-pointer'} />
                <div className={'w-5 h-5 bg-orange-400 mt-2 hover:bg-orange-300 hover:cursor-pointer'} />
                <div className={'w-5 h-5 bg-yellow-400 mt-2 hover:bg-yellow-300 hover:cursor-pointer'} />
              </div>
              <div className={'flex flex-row justify-start gap-2 w-full '}>
                <div className={'flex justify-center align-center rounded-full bg-amber-400 p-1 hover:cursor-pointer'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={'rgb(255,255,255)'}
                    color={'white'}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div className={'flex justify-center align-center rounded-full bg-amber-400 p-1 hover:cursor-pointer'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={'rgb(255,255,255)'}
                    color={'white'}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={'flex justify-center align-start flex-col mt-6'}>
              <p className={'font-semibold mb-2'}>Select Size</p>
              <div className={'flex align-start flex-row gap-3'}>
                <div
                  className={
                    'flex justify-center rounded-md align-center w-8 h-8 border-2 border-gray-300 text-gray-400 hover:cursor-pointer'
                  }
                >
                  7
                </div>
                <div
                  className={
                    'flex justify-center rounded-md align-center w-8 h-8 border-2 border-gray-300 text-gray-400 hover:cursor-pointer'
                  }
                >
                  8
                </div>
                <div
                  className={
                    'flex justify-center rounded-md align-center w-8 h-8 border-2 border-gray-300 text-gray-400 hover:cursor-pointer'
                  }
                >
                  9
                </div>
                <div
                  className={
                    'flex justify-center rounded-md align-center w-8 h-8 border-2 border-gray-300 text-gray-400 hover:cursor-pointer'
                  }
                >
                  10
                </div>
                <div
                  className={
                    'flex justify-center rounded-md align-center w-8 h-8 border-2 border-gray-300 text-gray-400 hover:cursor-pointer'
                  }
                >
                  11
                </div>
              </div>
            </div>
            <div className={'flex justify-center align-start flex-col'}>
              <p className={'text-3xl mb-6 mt-7'}>$ 94.59</p>
            </div>
            <div className={'flex justify-center align-start flex-col'}>
              <button className={'border-none rounded-md w-64 h-12 bg-orange-500 text-white text-xl max-md:w-full'}>
                Buy
              </button>
            </div>
          </div>
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

export default ShoeDetails;
