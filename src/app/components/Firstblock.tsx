import React from 'react';
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

const Firstblock = () => {
  return (
    <div> 

    

    <div className="flex flex-col justify-center items-center bg-[#f2f0ff] lg:flex-row px-4 py-8 lg:py-16 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section: Text and Lamp */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start md:relative w-full lg:w-1/2 space-y-6 lg:space-y-0">
        {/* Lamp Image */}
        <div className="flex justify-start lg:absolute lg:items-start user-lg:left-[-105px] user-lg:top-[-200px]
        xl:absolute xl:items-start xl:left-[-105px] xl:top-[-200px]   sm:w-[300px] md:w-[350px] lg:w-[387px] 
        user-md:top-[-100px] user-md:left-[-80px]">
          <img
            src="/image 32.png"
            alt="Hanging lamp"
            className="w-[250px] sm:w-[300px] md:w-[350px] user-lg:w-[387px] user-lg:h-[387px] user-md:w-[307px] user-md:h-[307px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start lg:ml-[200px] px-6 lg:px-0">
          <p
            className={`${lato.className} text-[#fb2e86] font-bold text-[14px] sm:text-[16px] user-lg:text-[18px] user-md:text-[12px] leading-5`}
          >
            Best Furniture For Your Castle....
          </p>
          <h1
            className={`${josefinSans.className} text-[#072b4b] xl:text-nowrap user-lg:text-nowrap user-md:text-nowrap
             text-[24px] sm:text-[32px] user-md:text-[30px] user-lg:text-[53px] font-bold leading-snug user-lg:leading-[82px]`}
          >
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p
            className={`${lato.className} text-[#8a8fb9] text-[14px] sm:text-[16px] user-md:text-[14px] user-lg:text-[18px]  leading-6 mt-4`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 bg-[#fb2e86] text-white px-6 py-3 rounded-md text-[14px] sm:text-[16px] font-semibold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Section: Chair Image */}
      <div className="flex justify-center relative w-full lg:w-1/2">
        <div className="relative">
          {/* Pink Chair */}
          <img
            src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
            alt="Pink chair"
            className="w-[200px] sm:w-[300px] user-md:w-[400px] user-lg:w-[629px] h-auto"
          />
          {/* 50% Logo */}
          <img
            src="/50plogo.png"
            alt="50% logo"
            className="absolute top-2 left-2 md:top-4 user-lg:left-[540px] user-md:left-[355px] user-sm:left-[285px] user-mobile-xsm:left-[180px]    lg:top-6 lg:right-6 w-[60px] sm:w-[80px]
            user-md:w-[100px] user-lg:w-[116px]  user-lg::left-[550px] user-xl:left-[550px]"
          />
        </div>
      </div>

  
    </div>
    {/* Pagination Dots */}
    <div className="flex space-x-3 justify-center items-center bg-[#f2f0ff] h-[100px]">
        <span className="w-3 h-3 bg-[#fb2e86] rounded-full cursor-pointer"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
      </div>
    </div>
  );
};

export default Firstblock;
