// Prod.tsx
import React from 'react';
import { BsCart } from 'react-icons/bs';
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa';
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

interface ProductProps {
  _id: number | string;
  imageSrc: string;
  productName: string;
  stockLevel: string | number;
  originalPrice: string | number;
  discountedPrice: string | number;
  colors?: string[];
  addToCart?: () => void;
}

export default function Prod({
  _id,
  imageSrc,
  productName,
  originalPrice,
  discountedPrice,
  stockLevel,
  colors = ['#de9034', '#ec42a2', '#8568ff'],
  addToCart,
}: ProductProps) {
  console.log("Rendering Product:", {
    _id,
    imageSrc,
    productName,
    originalPrice,
    discountedPrice,
    stockLevel,
  });

  return (
    <div>
      {/* Product */}
      <div>
        <div className="w-[270px] h-[363px] items-center justify-center group relative">
          <div className="flex items-center justify-center">
            <div className="flex w-[270px] h-[280px] items-center justify-center space-x-1 bg-[#f6f5ff] group relative p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
              <div className="flex justify-center">
                <div className="absolute hidden left-4 top-[150px] group-hover:block">
                  <div className="flex flex-col space-y-3 items-end justify-end">
                    <div className="flex w-[30px] h-[30px] justify-center items-center hover:bg-white hover:rounded-full">
                      <BsCart
                        onClick={addToCart} 
                        className="w-[16px] h-[16px] text-[#151875] hover:cursor-pointer"
                      />
                    </div>
                    <div className="flex w-[30px] h-[30px] justify-center items-center hover:bg-white hover:rounded-full">
                      <FaSearchPlus className="w-[16px] h-[16px] text-[#151875] hover:cursor-pointer" />
                    </div>
                    <div className="flex w-[30px] h-[30px] justify-center items-center hover:bg-white hover:rounded-full">
                      <FaRegHeart className="w-[16px] h-[16px] text-[#151875] hover:cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={imageSrc} width={169} height={169} alt={productName} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 justify-center items-center w-[270px] h-[83px]">
            <div className={`${josefinSans.className} text-[18px] font-bold text-[#151875]`}>
              <h3 className="text-center">{productName}</h3>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="w-3 h-3 rounded-full cursor-pointer hover:bg-[#fb2e86]"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="flex space-x-3 justify-center">
           <div className={`${josefinSans.className} text-[14px] font-[400px] text-[#151875]`}>
  {discountedPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
</div>

<div className={`${josefinSans.className} text-[14px] font-[400] text-[#fb3d8f] line-through`}>
  ${originalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
