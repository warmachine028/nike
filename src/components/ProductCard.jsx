import { star } from '../assets/icons';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const ProductCard = ({ productId, imgURL, name, price }) => {
  const addToCart = () => {
    // Check if there is already a cart in local storage
    const existingCart = localStorage.getItem('cart');

    // Parse the existing cart or create an empty object if it doesn't exist
    const cart = existingCart ? JSON.parse(existingCart) : {};

    if (cart[productId] && cart[productId].quantity > 0) {
      cart[productId].quantity++;
    } else {
      cart[productId] = { name, price, imgURL, quantity: 1 };
    }

    // Store the updated cart back in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/single_product/${id}`);
  };

  return (
    <div
      id={productId}
      className="relative flex flex-col w-full max-sm:w-full hover:scale-105 duration-300 ease-in-out rounded-lg p-4 shadow-lg dark:bg-slate-800"
    >
      <img
        src={imgURL}
        alt={`${name}-product`}
        height={282}
        className="rounded-lg text-center cursor-pointer"
        onClick={() => handleClick(productId)}
      />

      <div className="mt-4 flex items-center">
        <img src={star} alt="rating" height={24} width={24} className="mr-2" />
        <p className="font-montserrat sm:text-lg leading-normal text-slate-gray dark:text-gray-300">4.5</p>
      </div>

      <h3
        className="mt-2 text-xl sm:text-2xl leading-normal font-semibold font-palanquin cursor-pointer"
        onClick={() => handleClick(productId)}
      >
        {name}
      </h3>

      <div className="flex justify-between items-center">
        <p className="mt-2 sm:text-xl leading-normal font-semibold font-montserrat text-coral-red">
          ${price.toFixed(2)}
        </p>
        <ShoppingCartIcon
          onClick={() => {
            addToCart();
            enqueueSnackbar(<TickMark />);
          }}
          className="h-8 w-8 md:h-10 md:w-10 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red hover:scale-125"
        />
      </div>
    </div>
  );
};

const TickMark = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill="rgb(255 100 82 )"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
      </svg>
      &nbsp; Added to Cart
    </>
  );
};

export default ProductCard;
