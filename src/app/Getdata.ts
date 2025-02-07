// Getdata.ts
import { client } from "@/sanity/lib/client";

export const getImage = async () => {
  try {
    const products = await client.fetch(
      `*[_type == "product"]{
        _id,
        price,
        name,
        "imageUrl": image.asset->url,
        description,
        stockLevel,
        discountPercentage,
        category
      }`
    );
    console.log("Fetched Products:", products); // Log the fetched data
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of error
  }
};
