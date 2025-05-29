import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products.json';
import SuggestionCards from './SuggestionCards';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <p className="p-8 text-center text-red-600">Product not found.</p>;
  }

  // Select 3 random products excluding the current product
  const suggestions = products
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="p-8 max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row gap-16 relative">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-4/5 h-[600px] object-contain"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
            <p className="text-teal-700 font-bold text-xl mb-4">₹ {product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-teal-700 text-white py-2 px-6 rounded hover:bg-teal-900 transition"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <SuggestionCards products={suggestions} />
    </>
  );
}
