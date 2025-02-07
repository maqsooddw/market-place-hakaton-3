import React from 'react'
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


const Firstblock = () => {
  return (
    <div>
    
    {/*  */}
    <div className="flex flex-col justify-center items-center  bg-[#f2f0ff] lg:flex-row p-2 relative space-y-8 lg:space-y-0 lg:space-x-2">
  {/* text and lamp */} <div className='flex relative'>
  
  {/* Set One */}
    <div className="flex lg:flex-row items-start justify-start p-2 w-full">
    {/* Image Section */}
    <div className="flex lg:ml-[-0px] lg:absolute md:relative lg:w-1/4">
      <img
        src="/image 32.png"
        alt="Hanging lamp"
        className="lg:w-[387px] lg:h-[387px] md:w-[200px] md:h-[200px] z-0"
      />

    </div>

{/* Text Content Section */}
<div className="flex flex-col items-start mt-10 lg:mt-40 lg:ml-[155px] p-6 z-10">
  <p className={`${lato.className} text-[#fb2e86] font-bold leading-[20px] md:text-[12px] lg:text-[14px] md:leading-[24px] lg:leading-[28px] `}>
    Best Furniture For Your Castle....
  </p>
  <h1 className={`${josefinSans.className} text-[#072b4b] text-[28px] md:text-[40px] lg:text-[53px] font-bold lg:leading-[81.98px] lg:tracking-1-5 text-nowrap`}>
    New Furniture Collection <br /> Trends in 2020
  </h1>
  <p className={`${lato.className} text-[14px] md:text-[16px] lg:text-[18px] text-[#8a8fb9] font-medium mt-4 mb-6 `}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
    adipiscing in phasellus non in justo.
  </p>
  <button className="bg-[#fb2e86] text-white px-6 py-3 rounded font-semibold">
    Shop Now
  </button>
</div>


  </div>

  </div>
  {/* Set Two */}
  <div className="flex flex-col md:flex-row items-center justify-center relative w-full lg:w-1/2 p-6">
    {/* Pink Chair Image */}
    <div className="relative lg:ml-[-140px] mt-12">
      <img
        src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
        alt="Pink chair"
        className="w-[300px] lg:w-[629px] h-auto  z-10"
      />
      {/* 50% Logo */}
      <img
        src="/50plogo.png"
        alt="50% logo"
        className="flex justify-end items-end absolute top-0 left-0 lg:left-auto lg:right-0 w-[100px] lg:w-[136.56px] h-auto z-20 jus"
      />
    </div>
  </div>

</div>

        {/* Pagination Dots */}
        <div className="flex  space-x-2 items-start justify-center h-20 z-10 bg-[#f2f0ff]">
  <span className="w-3 h-3 bg-[#fb2e86] rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
  <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
  <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-[#fb2e86]"></span>
</div>

  </div>
  )
}

export default Firstblock
