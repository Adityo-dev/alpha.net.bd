"use client";
import { Cpu } from "lucide-react";
import React, { useState } from "react";

const VpsSelector = () => {
  const packages = [
    {
      id: 1,
      ssd: "2G",
      cpu: 1,
      ram: "2GB",
      space: "25GB",
      traffic: "1TB",
      price: "2120",
      location: "Los Angeles",
    },
    {
      id: 2,
      ssd: "4G",
      cpu: 4,
      ram: "6GB",
      space: "75GB",
      traffic: "3TB",
      price: "5830",
      location: "Los Angeles",
    },
    {
      id: 3,
      ssd: "6G",
      cpu: 8,
      ram: "16GB",
      space: "150GB",
      traffic: "6TB",
      price: "12650",
      location: "Los Angeles",
    },
    {
      id: 4,
      ssd: "8G",
      cpu: 12,
      ram: "32GB",
      space: "150GB",
      traffic: "6TB",
      price: "12650",
      location: "Los Angeles",
    },
    {
      id: 5,
      ssd: "16G",
      cpu: 12,
      ram: "32GB",
      space: "150GB",
      traffic: "6TB",
      price: "12650",
      location: "Los Angeles",
    },
    {
      id: 6,
      ssd: "32G",
      cpu: 12,
      ram: "32GB",
      space: "150GB",
      traffic: "6TB",
      price: "12650",
      location: "Los Angeles",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setSelectedPackage(packages[value - 1]);
  };

  return (
    <main className="relative container mx-auto bg-gray-100 rounded-lg shadow-md">
      <section className="py-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          Choose Your VPS Package
        </h1>

        <div className="mb-6 relative">
          <input
            type="range"
            min="1"
            max={packages.length}
            value={sliderValue}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition-all duration-300 ease-out"
            onChange={(e) => handleSliderChange(e.target.value)}
          />
          <div
            className="w-full bg-blue-300 h-2 rounded-lg mt-2 transition-all duration-300 ease-out absolute top-0"
            style={{ width: `${(sliderValue / packages.length) * 100}%` }}
          ></div>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 relative bg-[#EAEDF1] px-3 py-8 lg:py-8 mt-24">
          <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow-md text-center relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Cpu size={30} strokeWidth={2} />
                  <p>CPU Cores</p>
                </div>
                <p>
                  <span>{selectedPackage?.cpu}</span> <span>CPU</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Cpu size={30} strokeWidth={2} />
                  <p>IP Addresses</p>
                </div>
                <p>
                  <span>{selectedPackage?.cpu}</span> <span>IP</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Cpu size={30} strokeWidth={2} />
                  <p>RAM</p>
                </div>
                <p>
                  <span>{selectedPackage?.ram}</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Cpu size={30} strokeWidth={2} />
                  <p>Traffic</p>
                </div>
                <p>
                  <span>{selectedPackage?.traffic}</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Cpu size={28} strokeWidth={2.25} />
                  <p>SSD Space</p>
                </div>
                <p>
                  <span>{selectedPackage?.ssd}</span> <span>SSD</span>
                </p>
              </div>

              <div className="text-start">
                <p>KVM Virtualization</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/6 static -mt-28">
            <div className="w-full bg-white shadow-lg p-6">
              <p className="text-[#fd235d] border-b pb-6">Managed*</p>
              <div className="space-y-3 text-center border-b pt-6 pb-6">
                <p className="font-semibold">
                  <span className="text-5xl ">TK {selectedPackage?.price}</span>
                  <span className="text-2xl"> /mo</span>
                </p>
                <button className="bg-green-500 hover:bg-green-600 transition uppercase text-white text-nowrap px-4 py-2 rounded text-lg font-semibold">
                  Order now
                </button>
              </div>

              <p className="pt-6">
                <span>Available Locations</span>
                <span className="block text-sm text-[#464c53]">
                  (select during checkout):
                </span>
              </p>
              <p className="font-semibold mt-4 text-[#464c53]">
                {selectedPackage?.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VpsSelector;
