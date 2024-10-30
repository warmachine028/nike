import { star } from '../assets/icons';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import './SingleProductCard.scss';

const SingleProductCard = ({ productId, imgURL, name, price }) => {
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
    alert('Added to cart successfully');
  };

  return (
    <div id="🔥SingleProductCard">
      <div id="🔥SingleProductCard__X">
        <img id="🔥SingleProductCard__X__Img" src={imgURL} alt={`${name}-product`} height={282} />
      </div>
      <div id="🔥SingleProductCard__X2">
        <div id="🔥SingleProductCard__X2__X">
          <img id="🔥SingleProductCard__X2__X__Img" src={star} alt="rating" height={24} width={24} />
          <p id="🔥SingleProductCard__X2__X__P">4.5</p>
        </div>
        <h3 id="🔥SingleProductCard__X2__H3">{name}</h3>
        <div id="🔥SingleProductCard__X2__X2">
          <p id="🔥SingleProductCard__X2__X2__P">${price.toFixed(2)}</p>
          <ShoppingCartIcon onClick={addToCart} />
        </div>
        <button id="🔥SingleProductCard__X2__Btn">Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProductCard;
