import React from 'react';
import products from '../data/Products.json';

function Categories() {
  // Extract unique categories from product data
  const categories = Array.from(new Set(products.map(product => product.category)));

  const handleCategoryClick = (category) => {
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="p-8 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="bg-white border border-teal-300 rounded-lg p-6 text-center font-semibold cursor-pointer shadow hover:shadow-lg transition"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
