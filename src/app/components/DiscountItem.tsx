import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const DiscountItem = () => {
  return (
    <div className='flex flex-col justify-evenly items-center px-4 sm:px-6 lg:px-16'> 
      {/* Heading */}
      <div className={`${josefinSans.className} text-heading text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] font-bold mt-6 sm:mt-12`}>
        <h3>Discount Item</h3>
      </div>

      {/* Main Discount Item Section */}
      <div className='relative flex flex-col justify-evenly  lg:flex-row w-full max-w-7xl mx-auto mt-6 lg:mt-12'>
        {/* Text Section */}
        <div className='flex-1 px-4 sm:px-8 lg:px-12'>
          {/* Sub Menu */}
          <div className='flex justify-center lg:justify-start mb-4'>
            <ul className={`${lato.className} flex gap-2 sm:gap-4 text-[14px] text-center sm:text-[16px] font-[400]`}>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Wood Chair</li>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Plastic Chair</li>
              <li className='hover:text-[#fb2e86] hover:underline cursor-pointer'>Sofa Collection</li>
            </ul>
          </div>

          {/* Text Content */}
          <div>
            <h3 className={`${josefinSans.className} text-heading text-[20px] sm:text-[24px] md:text-[28px] leading-[1.4]`}>
              20% Discount Of All Products
            </h3>
            <p className={`${josefinSans.className} text-[#fb2e86] text-[16px] sm:text-[18px] leading-[1.6] mt-3`}>
              Eams Sofa Compact
            </p>
            <p className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] leading-[1.8] mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
          </div>

          {/* Features List */}
          <div className='flex mt-6 w-auto  flex-wrap justify-evenly gap-4'>
            <ul className='flex flex-wrap gap-4 '>
              <li className='flex items-center gap-2 w-full sm:w-[45%]'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] leading-[1.8]`}>
                  Material expose like metals
                </span>
              </li>
              <li className='flex items-center gap-2 user-lg:w-auto sm:w-[45%]'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] leading-[1.8]`}>
                  Clear lines and geometric figures
                </span>
              </li>
              <li className='flex items-center gap-2 w-full sm:w-[45%]'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] leading-[1.8]`}>
                  Simple neutral colors
                </span>
              </li>
              <li className='flex items-center gap-2 w-full sm:w-[45%]'>
                <FaCheck className='text-[#7569b2]' />
                <span className={`${lato.className} text-[#b7bacb] text-[14px] sm:text-[16px] leading-[1.8]`}>
                  Material expose like metals
                </span>
              </li>
            </ul>
          </div>

          {/* Shop Now Button */}
          <div className='mt-6'>
            <button className={`${josefinSans.className} w-full sm:w-[200px] h-[48px] sm:h-[57px] bg-[#fb2e86] text-white rounded-[2px] text-[16px] sm:text-[17px] font-bold`}>
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center z-0 mt-6 lg:mt-0">
          {/* Red Circle Background */}
          <div className="absolute bg-[#fcecf1] rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] z-0"></div>
          <img
            src="/tortuga-01-b 1.png"
            alt="wood chair"
            className="w-[250px] h-[225px] sm:w-[400px] sm:h-[350px] lg:w-[500px] lg:h-[450px] z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
