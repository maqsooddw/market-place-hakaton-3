import React from "react";import { FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { Josefin_Sans, Lato } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <div className="bg-[#f5f5ff] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${josefinSans.className}`}>Hekto</h2>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 rounded-l-md border border-gray-300 w-full"
              />
              <button className="bg-pink-500 text-white p-2 rounded-r-md text-[14px]"><span>SignUp</span></button>
            </div>
            <p className={`text-gray-500 ${lato.className}`}>Contact Info</p>
            <p className={`text-gray-500 ${lato.className}`}>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div>
            <h2 className={`text-xl font-bold mb-4 ${josefinSans.className}`}>Categories</h2>
            <ul className={`text-gray-500 ${lato.className}`}>
              <li className="mb-2">Laptops & Computers</li>
              <li className="mb-2">Cameras & Photography</li>
              <li className="mb-2">Smart Phones & Tablets</li>
              <li className="mb-2">Video Games & Consoles</li>
              <li className="mb-2">Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h2 className={`text-xl font-bold mb-4 ${josefinSans.className}`}>Customer Care</h2>
            <ul className={`text-gray-500 ${lato.className}`}>
              <li className="mb-2">My Account</li>
              <li className="mb-2">Discount</li>
              <li className="mb-2">Returns</li>
              <li className="mb-2">Orders History</li>
              <li className="mb-2">Order Tracking</li>
            </ul>
          </div>
          <div>
            <h2 className={`text-xl font-bold mb-4 ${josefinSans.className}`}>Pages</h2>
            <ul className={`text-gray-500 ${lato.className}`}>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Browse the Shop</li>
              <li className="mb-2">Category</li>
              <li className="mb-2">Pre-Built Pages</li>
              <li className="mb-2">Visual Composer Elements</li>
              <li className="mb-2">WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center p-4 bg-[#f0ecff]">
                    <p className="text-gray-500">©Webecy - All Rights Reserved</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[#2f1ac4]"><FaFacebook /></a>
                        <a href="#" className="text-[#2f1ac4]"><FaInstagram /></a>
                        <a href="#" className="text-[#2f1ac4]"><AiFillTwitterCircle /></a>
                    </div>
                </div>
    </div>
  );
}

export default Footer;
