import ua3shoe from '../assets/images/uacurry3.jpg';
import ua3shoe2 from '../assets/images/UACurry-3.png';
import ua3shoe3 from '../assets/images/UACurry3.1.png';
import ua3shoe4 from '../assets/images/UACurry3.2.png';
import Rating from './Rating.jsx';
import { products } from '../constants/index.js';
import ProductCard from './ProductCard.jsx';
import Menu from './Menu';
import './ShoeDetails.scss';

const ShoeDetails = () => {
  return (
    <div id="🔥ShoeDetails">
      <Menu />
      <div id="🔥ShoeDetails__X">
        <div>Men /</div>
        <div>Shoes /</div>
        <div>Sneakers /</div>
        <div>Basketball Shoes </div>
      </div>
      <div id="🔥ShoeDetails__X2">
        <div id="🔥ShoeDetails__X2__X">
          <div id="🔥ShoeDetails__X2__X__X">
            <img src={ua3shoe} alt={'ua curry 3'} width={'500'} />
          </div>
          <div id="🔥ShoeDetails__X2__X__X2">
            <img id="🔥ShoeDetails__X2__X__X2__Img" src={ua3shoe} alt={'ua curry 3'} />
            <img id="🔥ShoeDetails__X2__X__X2__Img" src={ua3shoe2} alt={'ua curry 3'} />
            <img id="🔥ShoeDetails__X2__X__X2__Img" src={ua3shoe4} alt={'ua curry 3'} />
            <img id="🔥ShoeDetails__X2__X__X2__Img" src={ua3shoe} alt={'ua curry 3'} />
            <img id="🔥ShoeDetails__X2__X__X2__Img" src={ua3shoe3} alt={'ua curry 3'} />
          </div>
        </div>
        <div id="🔥ShoeDetails__X2__X2">
          <div id="🔥ShoeDetails__X2__X2__X">
            <div id="🔥ShoeDetails__X2__X2__X__X">
              <p cid="🔥ShoeDetails__X2__X2__X__X__P" lassName={''}>
                UA CURRY 3
              </p>
              <p id="🔥ShoeDetails__X2__X2__X__X__P2">Mens Basketball Shoes</p>
              <div id="🔥ShoeDetails__X2__X2__X__X__X">
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'full'} />
                <Rating type={'empty'} />
              </div>
            </div>
            <div id="🔥ShoeDetails__X2__X2__X__X2">
              <p id="🔥ShoeDetails__X2__X2__X__X2__P">INFINITE SUPPORT. TOTAL CONTROL.</p>
              <p id="🔥ShoeDetails__X2__X2__X__X2__P2">
                Threadborne™ upper delivers lightweight directional strength to support the games most brilliant
                player. Stephen Curry.
              </p>
            </div>
            <div id="🔥ShoeDetails__X2__X2__X__X3">
              <div id="🔥ShoeDetails__X2__X2__X__X3__X">
                <div id="🔥ShoeDetails__X2__X2__X__X3__X__X" />
                <div id="🔥ShoeDetails__X2__X2__X__X3__X__X2" />
                <div id="🔥ShoeDetails__X2__X2__X__X3__X__X3" />
                <div id="🔥ShoeDetails__X2__X2__X__X3__X__X4" />
                <div id="🔥ShoeDetails__X2__X2__X__X3__X__X5" />
              </div>
              <div id="🔥ShoeDetails__X2__X2__X__X3__X2">
                <div id="🔥ShoeDetails__X2__X2__X__X3__X2__X">
                  <svg
                    id="🔥ShoeDetails__X2__X2__X__X3__X2__X__Svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={'rgb(255,255,255)'}
                    color={'white'}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div id="🔥ShoeDetails__X2__X2__X__X3__X2__X">
                  <svg
                    id="🔥ShoeDetails__X2__X2__X__X3__X2__X__Svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={'rgb(255,255,255)'}
                    color={'white'}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
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
            <div id="🔥ShoeDetails__X2__X2__X__X4">
              <p id="🔥ShoeDetails__X2__X2__X__X4__P">Select Size</p>
              <div id="🔥ShoeDetails__X2__X2__X__X4__X">
                <div id="🔥ShoeDetails__X2__X2__X__X4__X__X">7</div>
                <div id="🔥ShoeDetails__X2__X2__X__X4__X__X">8</div>
                <div id="🔥ShoeDetails__X2__X2__X__X4__X__X">9</div>
                <div id="🔥ShoeDetails__X2__X2__X__X4__X__X">10</div>
                <div id="🔥ShoeDetails__X2__X2__X__X4__X__X">11</div>
              </div>
            </div>
            <div id="🔥ShoeDetails__X2__X2__X__X5">
              <p id="🔥ShoeDetails__X2__X2__X__X5__P">$ 94.59</p>
            </div>
            <div id="🔥ShoeDetails__X2__X2__X__X6">
              <button id="🔥ShoeDetails__X2__X2__X__X6__Btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div id="🔥ShoeDetails__X3">
        <div id="🔥ShoeDetails__X3__X">
          <div id="🔥ShoeDetails__X3__X__X">
            <h2 id="🔥ShoeDetails__X3__X__X__H2">Similar Products You Might Enjoy</h2>
          </div>
          <div id="🔥ShoeDetails__X3__X__X2">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetails;
