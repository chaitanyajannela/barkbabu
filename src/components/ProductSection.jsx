import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/Products.json';

export default function ProductSection({ searchQuery, addToCart }) {
  // Extract unique categories from product data
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Group products by category
  const categorizedProducts = {};

  categories.forEach(category => {
    categorizedProducts[category] = products.filter(product => product.category === category);
  });

  // State to track current page index per category
  const [pageIndices, setPageIndices] = useState(
    categories.reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {})
  );

  const productsPerPage = 3;

  const setPage = (category, page) => {
    setPageIndices((prev) => ({
      ...prev,
      [category]: page,
    }));
  };

  // Filter products by search query (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered products by category
  const filteredCategorizedProducts = {};
  categories.forEach(category => {
    filteredCategorizedProducts[category] = filteredProducts.filter(product => product.category === category);
  });

  return (
    <section className="p-8 max-w-screen-lg mx-auto">
      {searchQuery === '' && <h2 className="text-2xl font-bold mb-6">Products by Category</h2>}
      {searchQuery === '' ? (
        categories.map(category => {
          const items = categorizedProducts[category];
          const currentPage = pageIndices[category];
          const totalPages = Math.ceil(items.length / productsPerPage);
          const startIndex = currentPage * productsPerPage;
          const visibleItems = items.slice(startIndex, startIndex + productsPerPage);

          return (
            <div key={category} id={category} className="mb-10">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              {items.length === 0 ? (
                <p className="text-gray-500">No products available in this category.</p>
              ) : (
                <>
                  <div className="flex space-x-4 px-2 overflow-hidden">
                    {visibleItems.map(product => (
                      <div key={product.id} className="w-[250px] border rounded-lg p-4 shadow hover:shadow-lg transition flex-shrink-0">
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-contain mb-4"
                          />
                          <h4 className="font-semibold text-lg">{product.name}</h4>
                        </Link>
                        <p className="text-teal-700 font-bold mt-2">₹ {product.price.toFixed(2)}</p>
                        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="mt-4 w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-900 transition"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                      <button
                        key={pageIndex}
                        onClick={() => setPage(category, pageIndex)}
                        className={`w-8 h-8 rounded-full ${pageIndex === currentPage ? 'bg-teal-700 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center cursor-pointer`}
                        aria-label={`Go to page ${pageIndex + 1} of ${category} products`}
                      >
                        {pageIndex + 1}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })
      ) : (
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Search Results</h3>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products match your search.</p>
          ) : (
            <div className="flex space-x-4 px-2 overflow-hidden">
              {filteredProducts.map(product => (
                <div key={product.id} className="w-[250px] border rounded-lg p-4 shadow hover:shadow-lg transition flex-shrink-0">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <h4 className="font-semibold text-lg">{product.name}</h4>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
