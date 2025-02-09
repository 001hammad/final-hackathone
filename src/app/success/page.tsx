export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-16 h-16 text-green-500"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M9 16.17l-4.88-4.88-1.41 1.41L9 19l10-10-1.41-1.41z" />
</svg>
          </div>
          
          <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
          <p className="mt-2 text-gray-700">Thank you for your purchase. Your order has been confirmed.</p>
          
          {/* Order Details Placeholder */}
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <p className="font-semibold">Order ID: <span className="text-gray-600">#123456</span></p>
            <p className="mt-1 font-semibold">Total Amount: <span className="text-gray-600">$99.99</span></p>
          </div>
          
          {/* Buttons */}
          <div className="mt-6 flex flex-col space-y-3">
            <a href="/ourshops" className="bg-[#FF9F0D] text-white px-6 py-3 rounded-md text-lg font-semibold">Continue Shopping</a>
            {/* <a href="/orders" className="text-blue-600 underline">View Order Details</a> */}
          </div>
        </div>
      </div>
    );
  }