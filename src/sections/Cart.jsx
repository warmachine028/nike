import Menu from '../components/Menu';
import { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  const [itemTotal, setItemTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  const updateCartTotals = (cartData) => {
    const total = Object.keys(cartData).reduce((acc, itemId) => {
      return acc + cartData[itemId].price * cartData[itemId].quantity;
    }, 0);
    const shippingCost = 8 * Object.keys(cartData).length;

    setItemTotal(total);
    setShipping(shippingCost);
  };
  const removeItem = (itemId) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[itemId];
    setCartItems(updatedCartItems);
    updateCartTotals(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };
  const increaseQuantity = (itemId) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems[itemId].quantity < 10) {
      updatedCartItems[itemId].quantity += 1;
      setCartItems(updatedCartItems);
      updateCartTotals(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const reduceQuantity = (itemId) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems[itemId].quantity > 1) {
      updatedCartItems[itemId].quantity -= 1;
      setCartItems(updatedCartItems);
      updateCartTotals(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  useEffect(() => {
    const cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    updateCartTotals(cartData);
    setCartItems(cartData);
  }, []);

  const total = itemTotal + shipping;

  return (
    <div id="🔥Cart">
      <Menu />
      <section id="🔥Cart__X">
        <div id="🔥Cart__X__X">
          <div id="🔥Cart__X__X__X">
            <h1 id="🔥Cart__X__X__X__H1">Your Cart</h1>
          </div>
          <div id="🔥Cart__X__X__X2">
            <div id="🔥Cart__X__X__X2__X">
              {cartItems && Object.keys(cartItems).length > 0 ? (
                // Render the cart content when there are items
                <ul id="🔥Cart__X__X__X2__X__Ul">
                  {Object.keys(cartItems).map((item) => (
                    <li id="🔥Cart__X__X__X2__X__Ul__Li" key={item}>
                      <div id="🔥Cart__X__X__X2__X__Ul__Li__X">
                        <span id="🔥Cart__X__X__X2__X__Ul__Li__X__Span">{cartItems[item].quantity}</span>
                        <img id="🔥Cart__X__X__X2__X__Ul__Li__X__Img" src={cartItems[item].imgURL} alt="" />
                      </div>
                      <div id="🔥Cart__X__X__X2__X__Ul__Li__X2">
                        <div id="🔥Cart__X__X__X2__X__Ul__Li__X2__X">
                          <div id="🔥Cart__X__X__X2__X__Ul__Li__X2__X__X">
                            <p id="🔥Cart__X__X__X2__X__Ul__Li__X2__X__X__P">{cartItems[item].name}</p>
                            <p id="🔥Cart__X__X__X2__X__Ul__Li__X2__X__X__P2">36EU - 4US</p>
                          </div>

                          <div id="🔥Cart__X__X__X2__X__Ul__Li__X2__X__X2">
                            <p id="🔥Cart__X__X__X2__X__Ul__Li__X2__X__X2__P">${cartItems[item].price.toFixed(2)}</p>
                          </div>
                        </div>

                        <div id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2">
                          <button
                            id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn"
                            onClick={() => reduceQuantity(item)}
                            type="button"
                          >
                            <svg
                              id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn__Svg"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12H18"></path>
                            </svg>
                          </button>
                          <button
                            id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn"
                            onClick={() => increaseQuantity(item)}
                            type="button"
                          >
                            <svg
                              id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn__Svg2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                            </svg>
                          </button>
                          <button
                            id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn"
                            onClick={() => removeItem(item)}
                            type="button"
                          >
                            <svg
                              id="🔥Cart__X__X__X2__X__Ul__Li__X2__X2__Btn__Svg2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                // Render a message when the cart is empty
                <div id="🔥Cart__X__X__X2__X__Empty">
                  <p id="🔥Cart__X__X__X2__X__Empty__P">Your cart is empty. Add some items to your cart!</p>
                </div>
              )}
              <div id="🔥Cart__X__X__X2__X__X">
                <div id="🔥Cart__X__X__X2__X__X__X">
                  <p id="🔥Cart__X__X__X2__X__X__X__P">Subtotal</p>
                  <p id="🔥Cart__X__X__X2__X__X__X__P2">${itemTotal.toFixed(2)}</p>
                </div>
                <div id="🔥Cart__X__X__X2__X__X__X">
                  <p id="🔥Cart__X__X__X2__X__X__X__P">Shipping</p>
                  <p id="🔥Cart__X__X__X2__X__X__X__P2">${shipping}.00</p>
                </div>
              </div>
              <div id="🔥Cart__X__X__X2__X__X2">
                <p id="🔥Cart__X__X__X2__X__X2__P">Total</p>
                <p id="🔥Cart__X__X__X2__X__X2__P2">
                  <span id="🔥Cart__X__X__X2__X__X2__P2__Span">USD</span> {total.toFixed(2)}
                </p>
              </div>
              <div id="🔥Cart__X__X__X2__X__X3">
                <button id="🔥Cart__X__X__X2__X__X3__Btn" type="button">
                  Place Order
                  <svg
                    id="🔥Cart__X__X__X2__X__X3__Btn__Svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
