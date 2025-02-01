"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

function FacebookCard() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white shadow-2xl border rounded-2xl p-5 w-80 z-[999] flex flex-col items-center">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        onClick={() => setIsVisible(false)}
      >
        <X size={22} />
      </button>

      {/* Facebook Page Content */}
      <div className="flex flex-col items-center">
        <div className="w-200 h-20 mb-10 justify-center flex items-center">
          <Image
            src="/logo.jpg" // Replace with your Facebook logo
            alt="DinisoftBD Company Logo"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Follow Us on Facebook</h2>
        <p className="text-gray-600 text-sm text-center mt-1">
          Stay updated with our latest news & offers!
        </p>
        <a
          href="https://www.facebook.com/dinisoftbd"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Visit Page
        </a>
      </div>
    </div>
  );
}

export default FacebookCard;
