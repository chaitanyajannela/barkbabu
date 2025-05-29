import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { TbDog } from "react-icons/tb";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import products from './data/Products.json';

function Header({ searchQuery, setSearchQuery, cart, toggleCartView }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchQuery]);

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
    // Removed navigation to product detail page on suggestion click
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow click event to register
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <>
      <nav className="bg-white px-8 pt-2 shadow-md relative">
        <div className="-mb-px flex justify-between items-center">
          <div className="flex items-center text-grey-900 special-gothic-expanded-one-regular text-lg mr-8 space-x-2">
            <TbDog size={24} color={"red"} />
            <span>Barkbabu</span>
          </div>
          <div className="flex justify-center flex-grow">
            <Link to="/" className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300">
              Products
            </Link>
            <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
              About
            </a>
            <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
              Contact
            </a>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 ml-8 relative">
            <input
              type="text"
              placeholder="Search Products...."
              className="outline-none text-xs"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              onBlur={handleBlur}
              aria-label="Search Products"
              ref={inputRef}
              autoComplete="off"
            />
            <button className="ml-2 text-teal-700 hover:text-teal-900" aria-label="Search button">
              <CiSearch size={18} />
            </button>
            {showSuggestions && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md max-h-48 overflow-y-auto z-50 text-xs">
                {suggestions.map(product => (
                  <li
                    key={product.id}
                    className="px-2 py-1 cursor-pointer hover:bg-teal-700 hover:text-white"
                    onMouseDown={() => handleSuggestionClick(product)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="ml-6 relative hover:text-teal-700 cursor-pointer transition-colors duration-300"
            onClick={toggleCartView}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') toggleCartView(); }}
            aria-label="Toggle cart view"
          >
            <PiShoppingCartSimpleFill size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
