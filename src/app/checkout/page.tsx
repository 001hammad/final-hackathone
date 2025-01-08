'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Checkout = () => {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);

  type CartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
  };

  type Address = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    company: string;
    country: "" | typeof countries[number]; // Allowing empty string along with the country values
    city: string;
    zipCode: string;
    address1: string;
    address2: string;
  };
  
  // Shipping and billing address state
  const [shippingAddress, setShippingAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    country: '' as keyof typeof cities,
    city: '',
    zipCode: '',
    address1: '',
    address2: ''
  });

  const [billingAddress, setBillingAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    country: '' as keyof typeof cities,
    city: '',
    zipCode: '',
    address1: '',
    address2: ''
  });

  const [sameAsShipping, setSameAsShipping] = useState(false);

  // Example data for country and city selection
  const countries = [ 'Pakistan', 'United States', 'Canada', 'United Kingdom'] as const;
  const cities = {
    'Pakistan': ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Leeds']
  };

  useEffect(() => {
    // Get cart and discount from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = JSON.parse(urlParams.get('cart') || '[]');
    const discountData = parseFloat(urlParams.get('discount') || '0');

    setCart(cartData);
    setDiscount(discountData);
  }, []);

  // Calculate cart subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate shipping charge (example fixed value)
  const shippingCharge = 10.0;

  // Calculate total amount
  const totalAmount = subtotal + shippingCharge - discount;

  // Handle place order
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // You can redirect to a confirmation page or reset the cart here
    router.push('/');
  };

  // Handle shipping address change
  const handleShippingAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle billing address change
  const handleBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Toggle the billing address checkbox
  const handleSameAsShippingToggle = () => {
    setSameAsShipping(!sameAsShipping);
    if (!sameAsShipping) {
      setBillingAddress(shippingAddress);
    } else {
      setBillingAddress({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        country: '' ,
        city: '',
        zipCode: '',
        address1: '',
        address2: ''
      });
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6 px-4 md:px-[20px] py-[20px]">
      <h2 className="font-bold text-xl md:text-2xl mb-4">Checkout</h2>

      {/* Shipping Address Form */}
      <div className="w-full border p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">Shipping Address</h3>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={shippingAddress.email}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Email Address"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={shippingAddress.phoneNumber}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={shippingAddress.company}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Company"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Country</label>
              <select
                name="country"
                value={shippingAddress.country}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">City</label>
              <select
                name="city"
                value={shippingAddress.city}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                disabled={!shippingAddress.country}
              >
                <option value="">Select City</option>
                {shippingAddress.country && cities[shippingAddress.country]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={shippingAddress.zipCode}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Address Line 1</label>
              <input
                type="text"
                name="address1"
                value={shippingAddress.address1}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Address Line 1"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2">Address Line 2</label>
              <input
                type="text"
                name="address2"
                value={shippingAddress.address2}
                onChange={handleShippingAddressChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Address Line 2"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Billing Address Checkbox */}
      <div className="flex items-center space-x-2 mb-6">
        <input
          type="checkbox"
          id="sameAsShipping"
          checked={sameAsShipping}
          onChange={handleSameAsShippingToggle}
          className="h-4 w-4"
        />
        <label htmlFor="sameAsShipping" className="text-sm font-semibold">
          Billing Address same as Shipping Address
        </label>
      </div>

      {/* Billing Address Form */}
      {!sameAsShipping && (
        <div className="w-full border p-4 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-4">Billing Address</h3>
          <form className="space-y-4">
            {/* Similar inputs as for shipping address */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={billingAddress.firstName}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={billingAddress.lastName}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={billingAddress.email}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={billingAddress.phoneNumber}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={billingAddress.company}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Company"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Country</label>
                <select
                  name="country"
                  value={billingAddress.country}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">City</label>
                <select
                  name="city"
                  value={billingAddress.city}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  disabled={!billingAddress.country}
                >
                  <option value="">Select City</option>
                  {billingAddress.country && cities[billingAddress.country]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={billingAddress.zipCode}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Address Line 1</label>
                <input
                  type="text"
                  name="address1"
                  value={billingAddress.address1}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Address Line 1"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Address Line 2</label>
                <input
                  type="text"
                  name="address2"
                  value={billingAddress.address2}
                  onChange={handleBillingAddressChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Total and Order Summary */}
      <div className="w-full border p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal</span>
            <span>{subtotal.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping</span>
            <span>{shippingCharge.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Discount</span>
            <span>-{discount.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{totalAmount.toFixed(2)} USD</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-[#FF9F0D] text-white text-lg font-semibold rounded-md"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
