"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/Components/CartContext";
import { useParams } from "next/navigation";
import HeroSection from "@/app/Components/HeroSection";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface ProductDetail {
  slug: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  largeImage: string;
  status: string;
  rating: number;
}

const ShopDetailPage = () => {
  const params = useParams();
  const { slug } = params;
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddtoCart = () => {
    if (product) {
      addToCart({
        id: product.slug,
        name: product.name,
        price: product.price,
        quantity,
        rating: product.rating || 0,
        image: product.imageUrl,
        largeImage: product.largeImage || product.imageUrl,
        status: product.status || "available",
      });
      setMessage("Item added to cart successfully!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "food" && slug.current == "${slug}"] {
          name,
          description,
          price,
          slug,
          "imageUrl": image.asset->url,
          "largeImage": image.asset->url
        }`;

        const data = await client.fetch(query);

        if (data.length > 0) {
          setProduct(data[0]);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title="Shop details" currentPage="shop detail" backgroundImage="/starbg.png" homeLink="/" />

      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-start gap-8">
        {/* Left Section: Thumbnail Images */}
        <div className="flex flex-col gap-4">
          {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map((thumb, index) => (
            <Image
              key={index}
              src={thumb}
              alt={`${product.name} thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="rounded shadow cursor-pointer border border-gray-200 hover:border-black"
            />
          ))}
        </div>

        {/* Center Section: Large Image */}
        <div className="flex-1">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-600 text-xl font-semibold">
            Price: ${product.price.toFixed(2)}
          </p>

          {/* Quantity Adjuster */}
          <div className="flex items-center gap-4">
            <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddtoCart}
            className="px-6 py-2 bg-[#FF9F0D] text-white font-medium text-lg rounded hover:bg-[#e68a00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F0D]"
          >
            Add to Cart
          </button>

          {/* Success Message */}
          {message && <p className="text-green-600 mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
