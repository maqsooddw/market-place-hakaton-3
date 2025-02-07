"use client";

import React, { useState, useEffect } from "react";
import Prod from "../components/prod";
import Cart from "../components/Cart";
import { getImage } from "../Getdata";

export default function ProductList() {
  const [cart, setCart] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getImage();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string | number, quantity: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const removeFromCart = (productId: string | number) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  return (
    <div>
      <div className="w-full grid grid-cols-1 user-4k:grid-cols-4 user-2k:grid-cols-4 user-lg:grid-cols-4 user-md:grid-cols-3 justify-items-center items-center gap-4">
        {products.map((value: any) => (
          <Prod
            key={value._id}
            _id={value._id}
            imageSrc={value.imageUrl}
            productName={value.name}
            originalPrice={value.price}
            discountedPrice={value.price - (value.price * value.discountPercentage) / 100}
            addToCart={() => addToCart(value)}
            stockLevel={value.stockLevel}
          />
        ))}
      </div>

      {/* Updated Cart Component */}
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
}
