import React from "react";
import SliderProduct from "./DomainNameSilder";

const domainNameData = [
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
  {
    image: "/com.png",
    currentPrice: "2.56",
    oldPrice: "39.95",
    sell: true,
  },
];

function DomainName() {
  return (
    <div className="bg-[#344CB7] w-full h-20 pt-2">
      <SliderProduct domainNameData={domainNameData} />
    </div>
  );
}

export default DomainName;
