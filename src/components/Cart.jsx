import React from 'react';

export default function Cart({ cart, removeFromCart, onCheckout, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="fixed top-16 right-4 w-80 bg-white border border-gray-300 rounded shadow-lg p-4 z-50">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="max-h-64 overflow-y-auto">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-3 border-b pb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded mr-3"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-teal-700 font-bold mt-1">₹ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-semibold ml-3"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4">
            <p className="text-lg font-bold text-right">
              Total: ₹ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
          <button
            onClick={onCheckout}
            className="mt-4 w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-900 transition"
            aria-label="Checkout"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
