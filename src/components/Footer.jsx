import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-6 mt-10">
      <div className="max-w-screen-lg mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BarkBabu. All rights reserved.</p>
        <p>Contact us: chaitanyajannela@gmail.com | +91 8125466477</p>
      </div>
    </footer>
  );
}
