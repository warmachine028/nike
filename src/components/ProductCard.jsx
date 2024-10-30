import { star } from '../assets/icons';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import './ProductCard.scss';

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
    <div id="🔥ProductCard">
      <img
        id="🔥ProductCard__Img"
        src={imgURL}
        alt={`${name}-product`}
        height={282}
        onClick={() => handleClick(productId)}
      />

      <div id="🔥ProductCard__X">
        <img id="🔥ProductCard__X__Img" src={star} alt="rating" height={24} width={24} />
        <p id="🔥ProductCard__X__P">4.5</p>
      </div>

      <h3 id="🔥ProductCard__H3" onClick={() => handleClick(productId)}>
        {name}
      </h3>

      <div id="🔥ProductCard__X2">
        <p id="🔥ProductCard__X2__P">${price.toFixed(2)}</p>
        <ShoppingCartIcon
          onClick={() => {
            addToCart();
            enqueueSnackbar(<TickMark />);
          }}
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
