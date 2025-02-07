"use client";

import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
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

interface CartItem {
  _id: string | number;
  imageUrl: string;
  name: string;
  price: number;
  discountPercentage: number;
  description: string;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: string | number, quantity: number) => void;
  removeFromCart: (productId: string | number) => void;
}

export default function Cart({ cart, updateQuantity, removeFromCart }: CartProps) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity;
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="mt-8 p-4 rounded-lg flex justify-around">
      <div>
        <h2 className="text-lg font-bold">Shopping Cart ({cart.length})</h2>

        {cart.length > 0 ? (
          <table className="w-fit table-auto border-collapse">
            <thead>
              <tr className={`${josefinSans.className} text-[20px] leading-[23.44px] text-[#1d3178]`}>
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center gap-4">
                      <div className="flex relative w-[84px] h-[88px]">
                        <div className="absolute z-20 top-0 right-0 cursor-pointer" onClick={() => removeFromCart(item._id)}>
                          <IoMdCloseCircle />
                        </div>
                        <div className="absolute z-10">
                          <img src={item.imageUrl} alt={item.name} width={83} height={87} />
                        </div>
                      </div>
                      <div>
                        <ul>
                          <li className={`${josefinSans.className} text-[14px] font-bold text-[#000000]`}>{item.name}</li>
                          <li>
                            <div className="flex">
                              <div className={`${josefinSans.className} text-[12px] text-[#a1a8c1]`}>Description:</div>
                              <div className={`${josefinSans.className} text-[14px] text-[#a1a8c1]`}>{item.description}</div>
                            </div>
                          </li>
                          <li>
                            <div className="flex">
                              <div className={`${josefinSans.className} text-[12px] text-[#a1a8c1]`}>Item ID:</div>
                              <div className={`${josefinSans.className} text-[14px] text-[#a1a8c1]`}>{item._id}</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td className={`${josefinSans.className} text-[14px] text-[#334072]`}>
                    {((item.price - (item.price * item.discountPercentage) / 100).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }))}
                  </td>
                  <td className="p-2">
                    <div className="flex items-center space-x-2 bg-[#f0eff2] h-4 w-fit">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="flex justify-center items-center bg-[#e7e7ef] text-[#b3b4b7] px-2 py-1 w-[12px] h-[15px] rounded"
                      >
                        +
                      </button>
                      <span className={`${josefinSans.className} text-[#b3b4b7] text-[12px]`}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="flex justify-center items-center bg-[#e7e7ef] text-[#b3b4b7] px-2 py-1 w-[12px] h-[15px] rounded"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className={`${josefinSans.className} text-[14px] text-[#334072]`}>
                    {((item.price - (item.price * item.discountPercentage) / 100) * item.quantity).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* part 2 div - Restored */}
      <div className="flex flex-col">
        <div className={`${josefinSans.className} text-[20px] text-[#1d3178] font-bold text-center`}>Cart Total</div>
        <div className="mt-10 mb-10 w-[371px] h-[284px] bg-[#f4f4fc]">
          <div className="flex justify-between p-5 mt-5 border-b border-[#e8e6f1]">
            <div className={`${lato.className} text-[18px] text-[#1d3178] font-semibold`}>Totals:</div>
            <div className={`${lato.className} text-[16px] text-[#1d3178] font-[400]`}>
              {total.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className={`${lato.className} bg-[#19d16f] w-[312px] h-[40px] flex items-center justify-center text-[14px] font-bold text-[#ffffff] cursor-pointer`}>
              Proceed To Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
