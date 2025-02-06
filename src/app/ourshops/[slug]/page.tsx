// app/product/[slug]/page.tsx

'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeroSection from "@/app/Components/HeroSection";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaFacebook, FaHeart, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useWishlist } from "@/app/Components/wishlistContext"; // Import Wishlist Context
import { useCart } from "@/app/Components/CartContext"; // Import Cart Context

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
  const [notification, setNotification] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, wishlist } = useWishlist(); // Use Wishlist Context
  const { addToCart } = useCart(); // Use Cart Context

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist({
        id: product.slug,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        largeImage: product.largeImage || product.imageUrl,
        status: product.status || "available", // Default status if not available
      });
      setNotification("Item added to wishlist!");

      // Hide the notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.slug,
        name: product.name,
        price: product.price,
        quantity,
        image: product.imageUrl,
        largeImage: product.largeImage || product.imageUrl,
        status: product.status || "available", // Default status if not available
        rating: product.rating || 0, // Add rating, defaulting to 0 if not available
      });
      setNotification("Item added to cart!");
  
      // Hide the notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
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
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const isInWishlist = wishlist.some(item => item.id === product?.slug);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return <div>Error: {error || "Product not found"}</div>;
  }

  return (
    <div>
      <HeroSection title="Shop details" currentPage="shop detail" backgroundImage="/starbg.png" homeLink="/" />

      {/* Notification Label */}
      {notification && (
        <div className="notification fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-all duration-500 flex items-center">
          <span className="icon text-2xl mr-4">✓</span> {/* Success Icon */}
          <span>{notification}</span> {/* Notification Text */}
        </div>
      )}

      <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Thumbnail Images with Scroll on Mobile */}
        <div className="w-full lg:w-auto flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide justify-center">
          {[...Array(4)].map((_, index) => (
            <Image key={index} src={product?.imageUrl} width={132} height={129} className="rounded border-2 w-[132px] h-[129px] object-cover flex-shrink-0" alt="thumbnail" />
          ))}
        </div>

        {/* Large Image */}
        <div className="w-full lg:w-[491px] h-[400px] lg:h-[596px] flex justify-center">
          <Image src={product?.largeImage} width={491} height={596} className="rounded w-full h-full object-cover" alt="large" />
        </div>

        {/* Product Details */}
        <div className="space-y-4 w-full lg:w-auto text-center lg:text-left">
          <span className="bg-[#FF9F0D] px-4 py-1 rounded text-white inline-block">In Stock</span>
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <p>{product?.description}</p>
          <p className="text-xl font-semibold">${product?.price.toFixed(2)}</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>

          {/* Quantity Adjuster */}
          <div className="flex items-center justify-center border px-3 py-2 rounded w-fit mx-auto lg:mx-0">
            <button onClick={decreaseQuantity} className="px-3">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3">+</button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button onClick={handleAddToCart} className="bg-[#FF9F0D] px-6 py-2 text-white rounded w-full lg:w-auto">Add to Cart</button>
            <button onClick={handleAddToWishlist} className={`flex items-center justify-center gap-2 mt-2 text-gray-600 mx-auto lg:mx-0 ${isInWishlist ? 'text-red-500' : ''}`}>
              <FaHeart /> {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-4">
            <FaFacebook />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
