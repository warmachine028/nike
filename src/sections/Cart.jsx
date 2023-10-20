import Menu from '../components/Menu';
import { useEffect, useState } from 'react';

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
    <>
      <Menu />
      <section className="py-12 sm:py-16 lg:py-20 mb-5 mt-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-4 md:mt-20 pt-4 md:pt-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Your Cart</h1>
          </div>
          <div className="mx-auto mt-4 max-w-xl md:mt-6 rounded-3xl bg-white dark:text-gray-400 dark:bg-gray-900 overflow-hidden shadow-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              {cartItems && Object.keys(cartItems).length > 0 ? (
                // Render the cart content when there are items
                <ul className="-my-8">
                  {Object.keys(cartItems).map((item) => (
                    <li
                      key={item}
                      className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                    >
                      <div className="shrink-0 relative">
                        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-700 dark:text-gray-300 text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                          {cartItems[item].quantity}
                        </span>
                        <img
                          className="h-24 w-24 max-w-full rounded-lg object-cover"
                          src={cartItems[item].imgURL}
                          alt=""
                        />
                      </div>
                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900 dark:text-gray-300">
                              {cartItems[item].name}
                            </p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                          </div>

                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 dark:text-gray-300 sm:text-right">
                              ${cartItems[item].price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 flex sm:bottom-5 sm:top-auto">
                          <button
                            onClick={() => reduceQuantity(item)}
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 dark:hover:text-gray-300"
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 12H18"
                                className=""
                              ></path>
                            </svg>
                          </button>
                          <button
                            onClick={() => increaseQuantity(item)}
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 dark:hover:text-gray-300"
                          >
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => removeItem(item)}
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900 dark:hover:text-gray-300"
                          >
                            <svg
                              className="h-4 w-4"
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
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty. Add some items to your cart!</p>
                </div>
              )}
              <div className="mt-6 space-y-3 border-t border-b py-8">
                <div className="flex items-center justify-between">
                  <p className=" text-gray-800 dark:text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">${itemTotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" text-gray-800 dark:text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">${shipping}.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-400">Total</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
                  <span className="text-xs font-normal text-gray-400">USD</span> {total.toFixed(2)}
                </p>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-900"
                >
                  Place Order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
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
    </>
  );
};

export default Cart;
