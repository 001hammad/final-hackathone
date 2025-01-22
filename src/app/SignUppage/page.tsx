import Link from "next/link"; // Importing Link from Next.js for navigation
// import { IoChevronForwardOutline } from "react-icons/io5"; // Unused icon
import { FcGoogle } from "react-icons/fc"; // Import Google icon
import { ImAppleinc } from "react-icons/im"; // Import Apple icon
// import { Input } from "@/components/ui/input"; // Unused Input component
import HeroSection from "../Components/HeroSection";

export default function SignInPage() {
  return (
    <>
      {/* <Hero/>  */}
      <HeroSection title="SignUp Page" homeLink="/" currentPage="signup" backgroundImage="/starbg.png"/>
      <div className="min-h-screen bg-white">
        {/* Signin Form Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
            {/* Sign-in Title */}
            <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
            <form>
              {/* Name Input Field */}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input Field */}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your email"
                />
              </div>
              {/* Password Input Field */}
              <div className="mb-4">
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your password"
                />
              </div>
              {/* Remember Me Checkbox */}
              <div className="flex items-center mb-4">
                {/* <Input type="checkbox" className="mr-2" /> */}
                <span>Remember me?</span>
              </div>
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
              >
                Sign Up
              </button>
              {/* Forgot Password Link */}
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p>or</p>
              {/* Google Sign In Button */}
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
                <FcGoogle className="h-6 mr-2" />
                Sign in with Google
              </button>
              {/* Apple Sign In Button */}
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
                <ImAppleinc className="h-6 mr-2" />
                Sign in with Apple
              </button>
            </div>
          </div>
        </section>
        {/* Footer Component */}
        {/* <Footer/> */}
      </div>
    </>
  );
}
