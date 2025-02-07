"use client"; 
import React, { useEffect, useState } from 'react';
import Everypageupperbox from '../components/Everypageupperbox';
import Submenuofproducts from '../components/Submenuofproducts';
import ProductList from '../components/Productlist'; 
import { getImage } from '../Getdata'; 
import Image from 'next/image';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getImage();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <div>
      <Everypageupperbox text="Shop Grid Default" />
      <Submenuofproducts />
      <ProductList />

      {/* start signature icon div */}
      <div className='flex items-center justify-center w-full h-fit mt-20 mb-20'>
        <div className='flex items-center justify-center'>
          <Image src='/image 1174.png' alt='signature div' width={904} height={93} />
        </div>
      </div>
    </div>
  );
}
