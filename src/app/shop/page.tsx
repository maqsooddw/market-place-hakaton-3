import React from 'react'
import ProductList from '../components/Productlist'
import { getImage } from '../Getdata'

const Shop = () => {

 const Products:any= getImage()
 console.log(Products)

  return (
  <>
  {/* learn python */}
  <ProductList/>
  
  
  </>
  )
}

export default Shop
