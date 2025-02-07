import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Navbar: React.FC = () => {
  return (
    <div
      className={`${josefinSans.className} container mx-auto p-5 flex flex-wrap items-center justify-between`}
    >
      {/* Navbar Content */}
      <div
        className={`w-full lg:w-[1177px] h-auto mx-auto flex flex-wrap items-center`}
      >
        {/* Logo */}

        <Link   className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#">  <span className="text-[34px] font-bold hidden sm:block">Hekto</span> </Link>
      
        {/* Navigation Links */}
        <div
          className={`${lato.className} text-[#0d0e43] flex flex-wrap items-center justify-center lg:ml-auto`}
        >
          <ul className="flex flex-wrap">
            <li>
         
              <Link href={"/"} className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Home</Link>
            </li>
            <li>
       
              <Link  href="/pages"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Pages </Link>
            </li>
            <li>
                <Link href="/products"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Products</Link>
            </li>
            <li>
         
              <Link     href="/blog"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Blog</Link>
            </li>
            <li>
        
              <Link       href="/shop"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Shop </Link>
            </li>
            <li>
            
              <Link href="/contact"
                className="mr-5 hover:text-[#fb2e86] text-sm sm:text-base"> Contact</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:w-auto flex mt-4 lg:mt-0">
          <input
            className="flex-grow border-2 p-2 rounded-l-md"
            type="text"
            placeholder="Search..."
          />
          <div className="bg-[#fb2e86] p-2 rounded-r-md flex items-center">
          <Link href={""}>    <img
                src="/Vector (1).png"
                alt="search logo"
                className="w-5 h-5"
              /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
