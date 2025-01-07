// app/cart/page.tsx
"use client";

import { useCart } from "../Components/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <div className="p-4">Your cart is empty!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <p className="text-xl font-bold">
              ${Number(item.price) * Number(item.quantity)} {/* Explicit type casting */}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-bold">
          Total: $
          {cart.reduce(
            (total, item) => total + (Number(item.price) * Number(item.quantity)),
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
