export default function CancelPage() {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Payment Cancelled ❌</h1>
        <p>Your checkout was canceled. You can try again.</p>
        <a href="/cart" className="text-blue-600 underline mt-4 block">Go back to Cart</a>
      </div>
    );
  }
  