import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';
import MainBody from './components/MainBody';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already in cart
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Increase quantity if already in cart
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleCartView = () => {
    setIsCartVisible((prev) => !prev);
  };

  const handleCheckout = () => {
    alert('Checkout functionality is not implemented yet.');
  };

  return (
    <Router>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} cart={cart} toggleCartView={toggleCartView} />
      {isCartVisible && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          onCheckout={handleCheckout}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
      <Routes>
        <Route path="/" element={<MainBody searchQuery={searchQuery} addToCart={addToCart} />} />
        <Route path="/products" element={<AllProducts searchQuery={searchQuery} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
