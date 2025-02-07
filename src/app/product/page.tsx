"use client"
import React from 'react'
import Everypageupperbox from '../components/Everypageupperbox'
import Submenuofproducts from '../components/Submenuofproducts'
import Products from '../components/Products'
import Prod from '../components/prod'
import { getImage } from '../Getdata'
import ProductList from '../components/Productlist'



export const Product = async () => {

  const products = await getImage()
  console.log(products)
{/* learn python */}
  return (
<div>

<Everypageupperbox text="Shop Grid Default"/>
<Submenuofproducts />
<ProductList/>



{/* 
_id,
  price,
    name,
     "imageUrl": image.asset->url,
    description,
    stockLevel,
    discountPercentage,
    category, */}


 {/* start signature icon div */} <div className=' flex items-center justify-center w-full h-fit mt-20 mb-20'> 
 
 <div className='  flex items-center justify-center'>
<img src='/image 1174.png' alt='signature div' width={904} height={93} />
</div>
</div> 
</div> 

  )
}

export default Product
