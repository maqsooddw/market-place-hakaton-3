import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import styles from '/LegendsList.module.css';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Fifthblock = () => {
  return (
    <div className="flex flex-col md:flex-row relative justify-center items-center h-auto md:h-[579px] w-full bg-productBg p-4 md:p-8 lg:p-12">
      {/* Blue Sofa Section */}
      <div className="relative flex items-center justify-center h-[300px] md:h-[600px] w-full md:w-[50%]">
        <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-[#f5e1fc] lg:ml-[-100px] rounded-full"></div>
        <img
          src="/blue sofa.png"
          alt="blue sofa"
          className="relative z-10 w-[200px] md:w-[400px] lg:w-[509px] h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-[50%] mt-8 md:mt-0 px-4 md:px-8">
        <h3
          className={`text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[38px] lg:leading-[46.2px] text-left font-semibold text-[#151875] mb-4`}
        >
          Unique Features Of Latest & <br />
          Trending Products
        </h3>
        <ul
          className={`list-none ${lato.className} text-[14px] md:text-[16px] leading-[18px] md:leading-[21.2px] space-y-4 md:space-y-5 text-[#acabc3]`}
        >
          <li className="flex items-center gap-2">
            <span className="w-2 md:w-3 h-2 md:h-3 bg-[#fb2e86] rounded-full inline-block"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 md:w-3 h-2 md:h-3 bg-[#2b2bf5] rounded-full inline-block mt-1"></span>
            <span>
              Reinforced with double wood dowels, glue, screw - nails corner <br />
              blocks and machine nails
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 md:w-3 h-2 md:h-3 bg-[#2bf5cc] rounded-full inline-block"></span>
            Arms, backs, and seats are structurally reinforced
          </li>
        </ul>
        <div
          className={`${josefinSans.className} flex flex-col sm:flex-row items-start sm:items-center text-[14px] mt-8 space-y-4 sm:space-y-0 sm:space-x-4`}
        >
          <div
            className="w-full sm:w-auto rounded-[2px] bg-[#fb2e86] text-center py-2 px-4 text-[16px] text-[#FFFFFF]"
          >
            <button>Add to Cart</button>
          </div>
          <div>
            <div className="text-[14px] leading-[16.4px] text-[#1a1d78]">
              <p>
                <span className="font-semibold">B&B</span> Italian Sofa
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">$</span>32.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthblock;
