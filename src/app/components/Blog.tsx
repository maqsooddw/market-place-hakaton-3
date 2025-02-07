import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { FaPenNib } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Blog = () => {
  return (
    <div className="px-4 user-sm:px-6 user-lg:px-12">
      {/* Heading */}
      <div className="flex items-center justify-center mt-10 user-sm:mt-20">
        <h3
          className={`${josefinSans.className} text-[20px] user-mobile-sm:text-[24px] user-sm:text-[28px] user-lg:text-[36px] leading-[28px] user-mobile-sm:leading-[30px] user-sm:leading-[40px] user-lg:leading-[45px] font-semibold text-heading`}
        >
          Latest Blog
        </h3>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 gap-5 mt-8 user-sm:grid-cols-2 user-lg:grid-cols-3">
        {/* Blog Card 1 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full">
          {/* Image */}
          <img
            src="/JIUjvqe2ZHg.png"
            alt="Blog 1"
            className="w-full h-[180px] user-sm:h-[255px] object-cover"
          />

          {/* Content */}
          <div className="p-4">
            {/* Writer and Date */}
            <div className="flex justify-between items-center mt-3">
              <ul className="flex items-center gap-1">
                <li className="text-[#fb2e86]">
                  <FaPenNib />
                </li>
                <li
                  className={`${josefinSans.className} text-[12px] user-sm:text-[14px] text-[#151875]`}
                >
                  SaberAli
                </li>
              </ul>
              <ul className="flex items-center gap-1">
                <li className="text-[#ffaf69]">
                  <SlCalender />
                </li>
                <li
                  className={`${josefinSans.className} text-[12px] user-sm:text-[14px] text-[#151875]`}
                >
                  21 August, 2020
                </li>
              </ul>
            </div>

            {/* Title */}
            <h3
              className={`${josefinSans.className} text-[16px] user-sm:text-[18px] mt-3 text-heading`}
            >
              Top Essential Trends in 2021
            </h3>

            {/* Description */}
            <ul className="mt-4">
              <li
                className={`${lato.className} text-[12px] user-sm:text-[16px] text-[#807f9b]`}
              >
                More off this less hello samlande lied much
              </li>
              <li
                className={`${lato.className} text-[12px] user-sm:text-[16px] font-bold text-[#807f9b]`}
              >
                Over tightly circa horse taped mightily
              </li>
            </ul>

            {/* Read More */}
            <p
              className={`${lato.className} text-[12px] user-sm:text-[16px] underline mt-4 cursor-pointer text-[#151875]`}
            >
              Read More
            </p>
          </div>
        </div>

        {/* Repeat Blog Cards */}
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden w-full"
          >
            {/* Image */}
            <img
              src={`/2dcYhvbHV-M${index === 1 ? ' (1)' : ''}.png`}
              alt={`Blog ${index + 2}`}
              className="w-full h-[180px] user-sm:h-[255px] object-cover"
            />

            {/* Content */}
            <div className="p-4">
              {/* Writer and Date */}
              <div className="flex justify-between items-center mt-3">
                <ul className="flex items-center gap-1">
                  <li className="text-[#fb2e86]">
                    <FaPenNib />
                  </li>
                  <li
                    className={`${josefinSans.className} text-[12px] user-sm:text-[14px] text-[#151875]`}
                  >
                    {index === 0 ? 'Surfauxion' : 'SaberAli'}
                  </li>
                </ul>
                <ul className="flex items-center gap-1">
                  <li className="text-[#ffaf69]">
                    <SlCalender />
                  </li>
                  <li
                    className={`${josefinSans.className} text-[12px] user-sm:text-[14px] text-[#151875]`}
                  >
                    21 August, 2020
                  </li>
                </ul>
              </div>

              {/* Title */}
              <h3
                className={`${josefinSans.className} text-[16px] user-sm:text-[18px] mt-3 text-heading`}
              >
                Top Essential Trends in 2021
              </h3>

              {/* Description */}
              <ul className="mt-4">
                <li
                  className={`${lato.className} text-[12px] user-sm:text-[16px] text-[#807f9b]`}
                >
                  More off this less hello samlande lied much
                </li>
                <li
                  className={`${lato.className} text-[12px] user-sm:text-[16px] font-bold text-[#807f9b]`}
                >
                  Over tightly circa horse taped mightily
                </li>
              </ul>

              {/* Read More */}
              <p
                className={`${lato.className} text-[12px] user-sm:text-[16px] underline mt-4 cursor-pointer text-[#151875]`}
              >
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
