import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/Products.json';

import prod1 from '../assets/products/prod (1).jpg';
import prod2 from '../assets/products/prod (2).jpg';
import prod3 from '../assets/products/prod (3).jpg';
import prod4 from '../assets/products/prod (4).jpg';
import prod5 from '../assets/products/prod (5).jpg';
import prod6 from '../assets/products/prod (6).jpg';
import prod7 from '../assets/products/prod (7).jpg';
import prod8 from '../assets/products/prod (8).jpg';
import prod9 from '../assets/products/prod (9).jpg';
import prod10 from '../assets/products/prod (10).jpg';
import prod11 from '../assets/products/prod (11).jpg';
import prod12 from '../assets/products/prod (12).jpg';
import prod13 from '../assets/products/prod (13).jpg';
import prod14 from '../assets/products/prod (14).jpg';
import prod15 from '../assets/products/prod (15).jpg';
import prod16 from '../assets/products/prod (16).jpg';

const productImages = {
  1: prod1,
  2: prod2,
  3: prod3,
  4: prod4,
  5: prod5,
  6: prod6,
  7: prod7,
  8: prod8,
  9: prod9,
  10: prod10,
  11: prod11,
  12: prod12,
  13: prod13,
  14: prod14,
  15: prod15,
  16: prod16,
};

export default function AllProducts({ addToCart, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = currentPage * productsPerPage;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="p-8 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <>
          <div className="flex flex-wrap gap-4">
            {visibleProducts.map(product => (
              <div key={product.id} className="w-[250px] border rounded-lg p-4 shadow hover:shadow-lg transition">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={productImages[product.id] || product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                </Link>
                <p className="text-teal-700 font-bold mt-2">₹ {product.price.toFixed(2)}</p>
                <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-900 transition flex justify-center items-center"
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-8 h-8 rounded-full ${index === currentPage ? 'bg-teal-700 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center cursor-pointer`}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
