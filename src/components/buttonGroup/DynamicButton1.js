import Link from "next/link";
import React from "react";

function DynamicButton1({ btnName, btnUrl, color, transparent }) {
  return (
    <div className="w-full h-full">
      <Link
        className={`w-full h-full bg-[#5D21D2] border border-[#5D21D2] py-1.5 uppercase text-center flex justify-center items-center ${
          transparent ? `bg-[#ffff] text-black` : "text-white"
        }`}
        href={btnUrl}
      >
        {btnName}
      </Link>
    </div>
  );
}

export default DynamicButton1;
