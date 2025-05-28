import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TbDog } from "react-icons/tb";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


function Header() {
  return (
    <>
    <nav className="bg-white px-8 pt-2 shadow-md">
        

     <div className="-mb-px flex justify-between items-center">
       <div className="flex items-center text-grey-900 special-gothic-expanded-one-regular text-lg mr-8 space-x-2">
         <TbDog size={24} />
         <span>Barkbabu</span>
       </div>
       <div className="flex justify-center flex-grow">
         <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
             Home
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
             Products
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
             About
         </a>
         <a className="no-underline text-grey-dark border-b-2 border-transparent hover:border-teal-700 uppercase tracking-wide font-bold text-xs py-3 mx-4 transition-colors duration-300" href="#">
                Contact
         </a>
       </div>
       <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 ml-8">
         <input
           type="text"
           placeholder="Search Products...."
           className="outline-none text-xs"
         />
         <button className="ml-2 text-teal-700 hover:text-teal-900">
           <CiSearch size={18} />
         </button>
       </div>
       <div className="ml-6 hover:text-teal-700 cursor-pointer transition-colors duration-300">
         <PiShoppingCartSimpleFill size={24} />
       </div>
     </div>
</nav>
</>
  )
}

export default Header
