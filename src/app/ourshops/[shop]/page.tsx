// app/ourshop/[shop]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/app/Components/AboutHero';

const products = [
  { 
    id: '1', 
    name: 'Yummy Chicken Chup', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.', 
    price: '54.00$', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/chicken-bbq.jpg',
    status: 'In stock'
  },
  { 
    id: '2', 
    name: 'Chocolate Muffin', 
    description: 'Description of Product 2', 
    price: '$20', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/blueberry-muffin.jpg',
    status: 'Out of stock'
  },
  { 
    id: '3', 
    name: 'Burger', 
    description: 'Description of Product 3', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n1.jpg',
    status: 'In stock'
  },
  { 
    id: '4', 
    name: 'Drink', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n2.jpg',
    status: 'In stock'
  },
  { 
    id: '5', 
    name: 'Cheezy Pizza', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n4.jpg',
    status: 'In stock'
  },
  { 
    id: '6', 
    name: 'Hot Dog', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n5.jpg',
    status: 'In stock'
  },
  
  { 
    id: '7', 
    name: 'Chicken Chup', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n6.jpg',
    status: 'In stock'
  },
  { 
    id: '8', 
    name: 'Chicken Chup', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n7.jpg',
    status: 'In stock'
  },
  { 
    id: '9', 
    name: 'Chocolate Muffin', 
    description: 'Description of Product 4', 
    price: '$30', 
    images: ['/s1.png', '/s2.png', '/s3.png', '/s4.png'], 
    largeImage: '/n2.jpg',
    status: 'In stock'
  },
];

const ProductDetailPage = ({ params }: { params: { shop: string } }) => {
  const { shop } = params;
  const product = products.find((product) => product.id === shop);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
       <Hero title='Shop Details' homeLink='/' currentPage='Shop Details' backgroundImage='/starbg.png'  />
        
      <div className="max-w-[1320px] mx-auto mt-[130px] flex flex-col md:flex-row gap-6 px-4">
        {/* Thumbnail images */}
        <div className="flex flex-wrap gap-4 md:w-[200px] w-full justify-center md:justify-start">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              width={132}
              height={129}
              className="w-[132px] h-[129px] rounded-[6px] border-2 object-cover"
            />
          ))}
        </div>

        {/* Large image */}
        <div className="w-full md:w-[491px] flex justify-center md:justify-start">
          <Image
            src={product.largeImage}
            alt="Large Image"
            width={491}
            height={596}
            className="rounded-[6px] w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 w-full">
          <div className="flex items-center mb-4">
            <span
              className={`px-4 py-1 rounded-full text-white text-sm ${
                product.status === 'In stock' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {product.status}
            </span>
          </div>

          <h1 className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[56px] mb-4">
            {product.name}
          </h1>

          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] mb-4">
            {product.description}
          </p>

          <hr className="mb-4" />

          <div className="flex items-center mb-4">
            <span className="font-bold text-[20px] md:text-[24px] mr-4">
              {product.price}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 border rounded"
               
              >
                -
              </button>
              <button
                className="px-4 py-2 border rounded"
              >
                +
              </button>
            </div>
            <button
              className="bg-[#FF9F0D] text-white px-6 py-2 rounded w-full sm:w-auto"
            >
              Add to Cart
            </button>
          </div>

          

          <hr className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
