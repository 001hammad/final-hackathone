import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}


export async function POST(req: Request) {
  try {
    const { cartItems } : { cartItems: CartItem[] }  = await req.json(); // Cart items frontend se aayenge

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Card Payment Enable
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // Success Page
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`, // If user cancels
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), // Stripe amount in cents
        },
        quantity: item.quantity,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}