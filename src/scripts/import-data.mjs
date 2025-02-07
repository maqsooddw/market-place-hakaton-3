import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file. Ensure this path is correct.
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Check if environment variables are loaded correctly
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error("Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not defined in the .env file.");
    process.exit(1); // Exit the process with an error code
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.error("Error: NEXT_PUBLIC_SANITY_DATASET is not defined in the .env file.");
    process.exit(1);
}
if (!process.env.SANITY_API_TOKEN) {
    console.error("Error: SANITY_API_TOKEN is not defined in the .env file.");
    process.exit(1);
}


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2023-04-10', // Use a recent API version
    useCdn: false,
});

async function uploadImageToSanity(imageUrl) {
    try {
        console.log(`Uploading Image : ${imageUrl}`);
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        const asset = await client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(),
        });
        console.log(`Image Uploaded Successfully : ${asset._id}`);
        return asset._id;
    } catch (error) {
        console.error('Failed to Upload Image:', imageUrl, error);
        return null;
    }
}

async function importData() {
    try {
        console.log('Fetching Product Data From API ...');

        const response = await axios.get("https://next-ecommerce-template-4.vercel.app/api/product");
        const products = response.data.products;

        if (!products || !Array.isArray(products)) {
            console.error("Error: Invalid product data received from API.");
            return; // Stop execution if data is invalid
        }

        for (const item of products) {
            console.log(`Processing Item: ${item.name}`);

            let imageRef = null;
            if (item.imagePath) {
                imageRef = await uploadImageToSanity(item.imagePath);
            }

            const sanityItem = {
                _type: 'product',
                name: item.name,
                category: item.category || null,
                price: item.price,
                description: item.description || '',
                discountPercentage: item.discountPercentage || 0,
                stockLevel: item.stockLevel || 0,
                isFeaturedProduct: item.isFeaturedProduct,
                image: imageRef
                    ? {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageRef,
                        },
                    }
                    : null, // Set to null if no image
            };

            console.log(`Uploading ${sanityItem.category} - ${sanityItem.name} to Sanity !`);
            try {
                const result = await client.create(sanityItem);
                console.log(`Uploaded Successfully: ${result._id}`);
            } catch (sanityError) {
                console.error(`Error uploading to Sanity:`, sanityError);
                console.error("Sanity Item that caused the error:", sanityItem);
            }
            console.log("----------------------------------------------------------");
            console.log("\n\n");
        }

        console.log('Data Import Completed Successfully !');
    } catch (error) {
        console.error('Error Importing Data : ', error);
    }
}

importData();