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

interface EverypageupperboxProps {
  text: string;
}

const Everypageupperbox: React.FC<EverypageupperboxProps> = ({ text }) => {
  return (
    <div>
      <div className="flex items-center h-[286px] w-full bg-[#f6f5ff]">
        {/* Text div */}
        <div className="h-[64px] w-fit relative user-xl:ml-[150px] user-lg:ml-[150px]">
          <h1
            className={` ${josefinSans.className} font-bold h-fit w-fit text-[36px] leading-[42.19px] text-[#101750]`}
          >
            {text}
          </h1>
          <ul
            className={`${lato.className} flex h-fit w-fit text-[16px] font-[500px] leading-[19.2px] space-x-2`}
          >
            <li>Home</li>
            <li>.</li>
            <li>Pages</li>
            <li className="text-[#fa539c]">.</li>
            <li className="text-[#fa539c]">{text}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Everypageupperbox;
