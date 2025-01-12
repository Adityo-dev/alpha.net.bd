import Link from "next/link";
import React from "react";

function DynamicButton1({ btnName, btnUrl, color, transparent }) {
  return (
    <div className="w-full h-full">
      <Link
        className="w-full h-full border py-1.5 uppercase text-center flex justify-center items-center"
        href={btnUrl}
        style={{
          backgroundColor: transparent ? color : "transparent",
          color: transparent ? "white" : "black",
          border: `1px solid ${color}`,
        }}
      >
        {btnName}
      </Link>
    </div>
  );
}

export default DynamicButton1;
