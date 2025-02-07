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

const Forthblock = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      {/* Heading Section */}
      <div className={`${josefinSans.className} text-[#1a0b5b] text-center mb-8`}>
        <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold">
          What Shopex Offer!
        </h3>
      </div>

      {/* Blocks Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* Block 1 */}
        <div className="flex flex-col items-center justify-center bg-blue rounded-lg p-6 space-y-4">
          <img
            src="/free-delivery 1.png"
            alt="Free Delivery"
            className="w-[50px] md:w-[65px] h-[50px] md:h-[65px]"
          />
          <h3 className={`${josefinSans.className} text-[18px] md:text-[22px] text-[#151875]`}>
            Free Delivery
          </h3>
          <p className={`${lato.className} text-[14px] md:text-[16px] text-center text-[#bab6ce]`}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center justify-center bg-blue rounded-lg p-6 space-y-4">
          <img
            src="/cashback 1.png"
            alt="Cash Back"
            className="w-[50px] md:w-[65px] h-[50px] md:h-[65px]"
          />
          <h3 className={`${josefinSans.className} text-[18px] md:text-[22px] text-[#151875]`}>
            Cash Back
          </h3>
          <p className={`${lato.className} text-[14px] md:text-[16px] text-center text-[#bab6ce]`}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
          </p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center justify-center bg-blue rounded-lg p-6 space-y-4">
          <img
            src="/premium-quality 1.png"
            alt="Premium Quality"
            className="w-[50px] md:w-[65px] h-[50px] md:h-[65px]"
          />
          <h3 className={`${josefinSans.className} text-[18px] md:text-[22px] text-[#151875]`}>
            Premium Quality
          </h3>
          <p className={`${lato.className} text-[14px] md:text-[16px] text-center text-[#bab6ce]`}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
          </p>
        </div>

        {/* Block 4 */}
        <div className="flex flex-col items-center justify-center bg-blue rounded-lg p-6 space-y-4">
          <img
            src="/24-hours-support 1.png"
            alt="24 Hours Support"
            className="w-[50px] md:w-[65px] h-[50px] md:h-[65px]"
          />
          <h3 className={`${josefinSans.className} text-[18px] md:text-[22px] text-[#151875]`}>
            24/7 Support
          </h3>
          <p className={`${lato.className} text-[14px] md:text-[16px] text-center text-[#bab6ce]`}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forthblock;
