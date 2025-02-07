import React from "react";
import { Josefin_Sans } from "next/font/google";
import { Lato } from "next/font/google";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Secondblock = () => {
  return (
    // main div of second block
    <div className={`${josefinSans.className} text-[#1a0b5b] mt-20`}>
      <h3
        className={`text-[42px] h-[42px] w-full  mb-4 text-center font-semibold gap-[2px]`}
      >
        Featured Products
      </h3>
      <div className="flex flex-wrap justify-center user-xl:justify-evenly user-lg:justify-evenly  gap-4 lg:h-[361px] md:h-auto md:w-auto relative bg-gre">
  {/* 1st item */}
  <div className="flex flex-col items-center justify-between w-[270px] sm:w-full lg:w-[270px] bg-[#f6f7fb] ">
    <div className="mt-12 ">
      <img src="/image 1168.png" alt="phone logo" className="w-[178px] h-[178px] mt-[4px]" />
    </div>
    <div className="flex flex-col text-[#151875] w-full space-y-2 p-2 text-center bg-[#ffffff]">
      <span  className="text-[18px] font-bold text-[#fb2e86]"> <p>Cantilever chair</p> </span>
      <p className="text-[14px]">Code - Y523201</p>
      <div className="flex space-x-2 items-center justify-center">
        <span className="w-3 h-1 bg-[#1aa8ee] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
      </div>
      <p className="text-[14px]">$42.00</p>
    </div>
  </div>

  {/* 2nd item */}
  <div className="flex flex-col items-center justify-between w-[270px] sm:w-full lg:w-[270px] bg-[#f6f7fb]">
    <div className="flex space-x-3 justify-start items-start mt-8">
      <BsCart className="w-[19px] h-[19px] text-[#2f1ac4]" />
      <FaRegHeart className="w-[17px] h-[17px] text-[#1aa8ee]" />
      <FaSearchPlus className="w-[15px] h-[15px] text-[#1aa8ee]" />
    </div>
    <img src="/image 1.png" alt="phone logo" className="w-[130px] h-[150px]" />
    <button className="bg-green-600 w-[94px] h-[29px] text-[12px] mb-2 text-[#ffffff]">
      View Detail
    </button>
    <div className="flex flex-col bg-[#2f1ac4] text-[#ffffff] w-full space-y-2 p-2 text-center">
      <p className="text-[18px] font-bold">Cantilever chair</p>
      <p className="text-[14px]">Code - Y523201</p>
      <div className="flex space-x-2 items-center justify-center">
        <span className="w-3 h-1 bg-[#1aa8ee] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
      </div>
      <p className="text-[14px]">$42.00</p>
    </div>
  </div>

  {/* 3rd item */}
  <div className="flex flex-col items-center justify-between w-[270px] sm:w-full lg:w-[270px] bg-[#f6f7fb]" >
    <div className="mt-12">
      <img src="/image 1169.png" alt="phone logo" className="w-[175px] h-[175px]" />
    </div>
    <div className="flex flex-col text-[#151875] w-full space-y-2 p-2 text-center bg-[#ffffff]">
      <p className="text-[18px] text-[#fb2e86] font-bold">Cantilever chair</p>
      <p className="text-[14px]">Code - Y523201</p>
      <div className="flex space-x-2 items-center justify-center">
        <span className="w-3 h-1 bg-[#1aa8ee] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
      </div>
      <p className="text-[14px]">$42.00</p>
    </div>
  </div>

  {/* 4th item */}
  <div className="flex flex-col items-center justify-between w-[270px] sm:w-full lg:w-[270px] bg-[#f6f7fb]">
    <div className="mt-12">
      <img src="/image 3.png" alt="phone logo" className="w-[216px] h-[151px]" />
    </div>
    <div className="flex flex-col text-[#151875] w-full space-y-2 p-2 text-center bg-[#ffffff]">
      <p className="text-[18px] font-bold text-[#fb2e86] ">Cantilever chair</p>
      <p className="text-[14px]">Code - Y523201</p>
      <div className="flex space-x-2 items-center justify-center">
        <span className="w-3 h-1 bg-[#1aa8ee] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
        <span className="w-3 h-1 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
      </div>
      <p className="text-[14px]">$42.00</p>
    </div>
  </div>
</div>

      

      {/* starting 2nd picture set div */}
      <h1
        className={`text-[42px] h-[49.22px] w-full text-center font-semibold gap-[2px] mt-[100px] ${josefinSans.className} text-[#1a0b5b]`}
      >
        Leatest Products
      </h1>

 <div
  className={`${lato.className} flex text-center items-center justify-center text-[18px] w-full h-[22px] rounded-[1px] mb-5`}
>
<ul className="flex flex-row justify-center items-center text-center space-x-8 mt-[30px]">
  <li>
    <Link href="#" className="hover:text-[#fb2e86]">New Arrival</Link>
  </li>
  <li>
    <Link href="#" className="hover:text-[#fb2e86]">Best Seller</Link>
  </li>
  <li>
    <Link href="#" className="hover:text-[#fb2e86]">Featured</Link>
  </li>
  <li>
    <Link href="#" className="hover:text-[#fb2e86]">Special Offer</Link>
  </li>
</ul>
</div>



      {/* end 1st 4 picure set */}
    </div>
    // ending main div
  );
};

export default Secondblock;
