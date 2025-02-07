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

const Trandingproducts = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8"> {/* Main container with responsive padding */}
      {/* Heading */}
      <div className={`${josefinSans.className} text-[#1a0b5b] text-center mb-8`}>
        <h3 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-[49.2px]">
          Trending Products
        </h3>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {/* Product Cards */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[270px] h-auto shadow-lg rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="flex justify-center items-center w-full h-[200px] sm:h-[244px] bg-productBg shadow-md">
              <img
                src={`/image ${1171 - index}.png`}
                alt={`Trending Product ${index + 1}`}
                className="w-[140px] sm:w-[171px] h-[140px] sm:h-[171px]"
              />
            </div>
            {/* Product Title */}
            <div className="text-center mt-3">
              <p className={`${lato.className} text-[14px] sm:text-[16px] font-medium text-gray-800`}>
                Cantilever chair
              </p>
            </div>
            {/* Product Price */}
            <div className="text-center mt-2">
              <ul className="flex gap-3 justify-center items-center">
                <li
                  className={`${josefinSans.className} text-[12px] sm:text-[14px] font-bold text-[#1a0b5b]`}
                >
                  $26.00
                </li>
                <li
                  className={`${josefinSans.className} text-[10px] sm:text-[12px] font-medium text-[#b9bad6] line-through`}
                >
                  $42.00
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Section */}
      <div className="flex flex-wrap justify-center items-center mt-8 gap-6">
        {/* Promo Item A */}
        <div className="w-full md:w-[420px] h-auto p-4">
          <div>
            <ul>
              <li className={`${josefinSans.className} text-[20px] sm:text-[26px] leading-[26px] text-[#151875]`}>
                23% off in all products
              </li>
              <li className={`${lato.className} text-[14px] sm:text-[16px] font-bold text-[#fb2e86]`}>
                Shop Now
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <img
              src="/image 1162.png"
              alt="23% discount 1st product"
              className="w-[150px] sm:w-[213px] h-[150px] sm:h-[207px]"
            />
          </div>
        </div>

        {/* Promo Item B */}
        <div className="w-full md:w-[420px] h-auto p-4 bg-productBg">
          <div>
            <ul>
              <li className={`${josefinSans.className} text-[20px] sm:text-[26px] leading-[26px] text-[#151875]`}>
                23% off in all products
              </li>
              <li className={`${lato.className} text-[14px] sm:text-[16px] font-bold text-[#fb2e86]`}>
                View Collection
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <img
              src="/image 1161.png"
              alt="23% discount 2nd product"
              className="w-[200px] sm:w-[312px] h-[150px] sm:h-[173px]"
            />
          </div>
        </div>

        {/* Small Product Cards */}
        <div className="flex flex-col gap-4">
          {['30', '19', '28'].map((img, idx) => (
            <div
              key={idx}
              className="flex items-center h-[74px] w-full sm:w-[267px] bg-productBg"
            >
              <img src={`/image ${img}.png`} alt={`Product ${img}`} className="w-[64px] h-[71px]" />
              <div className="ml-4">
                <ul>
                  <li className={`${josefinSans.className} text-[14px] sm:text-[16px] font-bold text-[#151875]`}>
                    Executive Seat chair
                  </li>
                  <li className={`${lato.className} text-[10px] sm:text-[12px] font-semibold text-[#151875]`}>
                    $32.00
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trandingproducts;
