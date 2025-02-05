"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Checkout = () => {
  const router = useRouter();

  // Cart and Discount State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);

  // Define Cart Item Type
  type CartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image?: string; // Optional image URL
  };

  // Shipping Address State
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  // Example data for country and city selection
  const countries = ["Pakistan", "United States", "Canada", "United Kingdom"] as const;
  const cities = {
    Pakistan: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Leeds"],
  };

  // Fetch Cart and Discount from Query Parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = JSON.parse(urlParams.get("cart") || "[]");
    const discountData = parseFloat(urlParams.get("discount") || "0");
    setCart(cartData);
    setDiscount(discountData);
  }, []);

  // Calculate Subtotal, Shipping, and Total Amount
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = 10.0;
  const totalAmount = subtotal + shippingCharge - discount;

  // Handle Shipping Address Change
  const handleShippingAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Place Order
  const handlePlaceOrder = () => {
    // Add validation to check if shipping address is complete
    if (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.email || !shippingAddress.phoneNumber) {
      alert("Please complete the shipping address fields.");
      return;
    }

    alert("Order placed successfully!");
    router.push("/");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Shipping Address */}
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Shipping Address</h2>
            <form className="space-y-6">
              {/* Name Fields: First Name and Last Name in one row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={shippingAddress.firstName}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={shippingAddress.lastName}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
              </div>

              {/* Contact Information: Email, Phone Number */}
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={shippingAddress.email}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={shippingAddress.phoneNumber}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
              </div>

              {/* Shipping Address Fields: Country, City, etc. */}
              <div className="space-y-4">
                <div>
                  <select
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  >
                    <option value="">Select Country</option>
                    {countries.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  >
                    <option value="">Select City</option>
                    {(cities[shippingAddress.country as keyof typeof cities] || []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="address1"
                    placeholder="Address Line 1"
                    value={shippingAddress.address1}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address2"
                    placeholder="Address Line 2"
                    value={shippingAddress.address2}
                    onChange={handleShippingAddressChange}
                    className="border p-2 rounded-md w-full"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md w-full hover:bg-blue-600 transition-colors"
          >
            Place Order
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-md space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item: CartItem, index: number) => (
              <div key={index} className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                )}
                <div>
                  <p className="text-gray-700">{item.name}</p>
                  <p className="text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Shipping:</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Discount:</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
