import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { HiViewGrid } from 'react-icons/hi';
import { MdViewList } from 'react-icons/md';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface EverypageupperboxProps {
  text: string;
}

export default function Submenuofproducts() {
  return (
    <div className='flex justify-center'>
      <div className='flex h-[44px] w-full user-4k:w-[1171px] user-2k:w-[1171px] user-xl:w-[1171px] user-lg:w-[1171px] user-md:w-[90%] user-sm:w-[90%] user-xs:w-[90%] user-mobile:w-[90%] user-mobile-sm:w-[90%] user-mobile-xsm:w-[90%] mt-20 mb-20 pl-10 justify-between flex-wrap'>
        {/* div-x */}
        <div className='h-full w-full user-4k:w-[369px] user-2k:w-[369px] user-xl:w-[369px] user-lg:w-[369px] user-md:w-[100%] user-sm:w-[100%] user-xs:w-[100%] user-mobile:w-[100%] user-mobile-sm:w-[100%] user-mobile-xsm:w-[100%]'>
          <div className={`${josefinSans.className} text-[18px] user-4k:text-[22px] user-2k:text-[22px] user-xl:text-[22px] user-lg:text-[22px] leading-[25.78px] h-fit w-fit`}>
            <h1>Ecommerce Accessories & Fashion Item</h1>
          </div>
          <div className={`${lato.className} text-[10px] user-4k:text-[12px] user-2k:text-[12px] user-xl:text-[12px] user-lg:text-[12px] font-[400px] leading-[14.4px] text-[#282b80] h-fit w-fit`}>
            <p>About 9,620 results (0.62 seconds)</p>
          </div>
        </div>
        {/* end div-x */}

        {/* div-y */}
        <div className='flex items-center w-full user-4k:w-auto user-2k:w-auto user-xl:w-auto user-lg:w-auto user-md:w-[100%] user-sm:w-[100%] user-xs:w-[100%] user-mobile:w-[100%] user-mobile-sm:w-[100%] user-mobile-xsm:w-[100%] mt-4 user-md:mt-0'>
          <form action=''>
            <div className='flex flex-col user-md:flex-row space-y-4 user-md:space-y-0 user-md:space-x-5'>
              {/* div y1 */}
              <div className='flex items-center space-x-3'>
                <div className={`${lato.className} text-[14px] user-4k:text-[18px] user-2k:text-[18px] user-xl:text-[18px] user-lg:text-[18px] leading-[19.2px] font-[400px] text-[#3f509e]`}>
                  <h3>Per Page:</h3>
                </div>
                <div className='text-[#3f509e]'>
                  <input
                    type='text'
                    id='text-input'
                    className='w-[55px] h-[30px] border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                </div>
              </div>

              {/* div y2 */}
              <div className='flex items-center space-x-3'>
                <div className={`${lato.className} text-[14px] user-4k:text-[18px] user-2k:text-[18px] user-xl:text-[18px] user-lg:text-[18px] leading-[19.2px] font-[400px] text-[#3f509e]`}>
                  <h3>Sort By:</h3>
                </div>
                <div className='text-[#3f509e]'>
                  <select
                    id='dropdown'
                    className='w-[96px] h-[30px] text-[12px] border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  >
                    <option value='' disabled>
                      -- Select an Option --
                    </option>
                    <option value='Option 1'>Best Match</option>
                    <option value='Option 2'>Ascending</option>
                    <option value='Option 3'>Descending</option>
                    <option value='Option 4'>Top Sales</option>
                  </select>
                </div>
              </div>

              {/* div y3 */}
              <div className='flex items-center space-x-3'>
                <div className={`${lato.className} flex items-center text-[14px] user-4k:text-[18px] user-2k:text-[18px] user-xl:text-[18px] user-lg:text-[18px] leading-[19.2px] font-[400px] text-[#3f509e]`}>
                  <div>
                    <h3>View:</h3>
                  </div>
                  <div className='hover:cursor-pointer'>
                    <HiViewGrid />
                  </div>
                  <div className='hover:cursor-pointer'>
                    <MdViewList />
                  </div>
                </div>
                <div className='text-[#3f509e]'>
                  <input
                    id='text-input'
                    className='w-[162px] h-[30px] border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                  <br />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}