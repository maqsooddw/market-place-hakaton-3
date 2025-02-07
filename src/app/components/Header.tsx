import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { space } from 'postcss/lib/list';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <div>
      {/* Header container */}
      <div className={`flex ${josefinSans.className} font-semibold flex w-full h-[44px] bg-[#7e33e0] text-[#ffffff] items-center justify-evenly `}>
        {/* Left Section: Email and Phone */}
        <div className='flex'>
          {/* Email Icon */}
          <div>
            <img src="/uil_envelope-alt.png" alt="email logo" className="w-[16] h-[16] mt-[4px]"/>
          </div>
          {/* Email Text */}
          <div
            className={` w-[171] h-[16] hidden sm:block mr-[48px]`}
          >
            mhhasanul@gmail.com
          </div>
          {/* Phone Icon */}
          <div>
            <img src="/bx_bx-phone-call.png" alt="phone logo" className='w-[16] h-[16] mt-[4px]'/>
          </div>
          {/* Phone Number */}
          <div className="w-[97] h-[16]  hidden sm:block">
            (12345)67890
          </div>
        </div>

        {/* Right Section: Dropdowns and Links */}
        <div
          className={`flex gap-[3px]`}
        >
          {/* Language */}
          <div className='w-[54] h-[16px]'>English</div>
          <div className='w-[16px] h-[16px] mt-[4px]'><img src="akar-icons_chevron-down.png" alt="drop down logo" /></div>
          {/* Currency */}
          <div className='w-[34px] h-[16px] '>USD</div>
          <div className='w-[16px] h-[16px] mt-[4px]'><img src="akar-icons_chevron-down.png" alt="drop down logo" /></div>
          {/* Login */}
          <div className='w-[43px] h-[16px] hidden sm:block'>Login</div>
          <div className='w-[16px] h-[16px] mt-[4px]'><img src="carbon_user.png" alt="drop down logo" /></div>
          {/* Wishlist */}
          <div className='w-[58px] h-[16px] hidden sm:block'>Wishlist</div>
          <div className='w-[16px] h-[16px] mt-[4px] mr-[40px]'><img src="uil_heart-alt.png" alt="drop down logo" /></div>
          {/* Cart */}
          <div className='w-[24px] h-[24px] mt-[0px]'><img src="fluent_cart-24-regular.png" alt="drop down logo" /></div>
        </div>
      </div>
    </div>
  );
}
