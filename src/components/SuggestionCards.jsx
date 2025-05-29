import React from 'react';
import { Link } from 'react-router-dom';

export default function SuggestionCards({ products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="p-8 max-w-screen-md mx-auto mt-12">
      <h3 className="text-2xl font-semibold mb-6">You might also like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            aria-label={`View details for ${product.name}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain bg-white p-4"
            />
            <div className="p-6 bg-white">
              <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
              <p className="text-teal-700 font-semibold">₹ {product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
