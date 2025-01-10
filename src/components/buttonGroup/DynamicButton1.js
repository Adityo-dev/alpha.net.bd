import Link from "next/link";
import React from "react";

function DynamicButton1({ btnName, btnUrl, color, transparent }) {
  return (
    <div className="w-full h-full">
      <Link
        className={`w-full h-full bg-[${color}] border border-[${color}] py-1.5 uppercase text-center flex justify-center items-center ${
          transparent ? "bg-transparent text-[${color}]" : "text-white"
        }`}
        href={btnUrl}
      >
        {btnName}
      </Link>
    </div>
  );
}

export default DynamicButton1;
