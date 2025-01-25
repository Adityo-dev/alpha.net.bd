"use client";
import { ChartSpline, Clock, Cpu, HardDrive, Microchip } from "lucide-react";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const VpsSelector = () => {
  const packages = [
    {
      id: 1,
      ssd: "1G",
      cpu: 1,
      ram: 2,
      space: 25,
      traffic: 1,
      ip: 1,
      price: 800,
      location: "Los Angeles",
      link: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-starter-vps", // Add link for the package
    },
    {
      id: 2,
      ssd: "4G",
      cpu: 4,
      ram: 4,
      space: 50,
      traffic: 2,
      ip: 1,
      price: 3710,
      location: "Los Angeles",
      link: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-standard-vps", // Add link for the package
    },
    {
      id: 3,
      ssd: "6G",
      cpu: 4,
      ram: 6,
      space: 75,
      traffic: 3,
      ip: 1,
      price: 5830,
      location: "Los Angeles",
      link: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-business-vps", // Add link for the package
    },
    {
      id: 4,
      ssd: "8G",
      cpu: 6,
      ram: 8,
      space: 100,
      traffic: 4,
      ip: 1,
      price: 1420,
      location: "Los Angeles",
      link: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-advanced-vps", // Add link for the package
    },
    {
      id: 5,
      ssd: "16G",
      cpu: 8,
      ram: 16,
      space: 150,
      traffic: 5,
      ip: 1,
      price: 1910,
      location: "Los Angeles",
      link: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-premium-vps", // Add link for the package
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

        {/* Slider Section */}
        <div className="mb-6 w-[90%] sm:w-[80%] mx-auto">
          <h1 className="text-2xl font-bold text-start mb-6">KVM VPS</h1>
          <Box
            sx={{
              mx: "auto",
              ".MuiSlider-root": {
                color: "#0056B3",
                height: 14,
              },
              ".MuiSlider-thumb": {
                height: 28,
                width: 28,
                backgroundColor: "#FFA726",
                border: "2px solid #fff",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "0px 0px 0px 8px rgba(255, 167, 38, 0.16)",
                },
              },
              ".MuiSlider-rail": {
                color: "#E0E0E0",
                opacity: 1,
                height: 14,
              },
              ".MuiSlider-track": {
                border: "none",
              },
              ".MuiSlider-mark": {
                backgroundColor: "#ffffff",
                height: 14,
                width: 2,
              },
              ".MuiSlider-markLabel": {
                fontSize: "0.875rem",
                color: "#000000",
                fontWeight: "bold",
                marginTop: "12px",
              },
            }}
          >
            <Slider
              value={sliderValue}
              min={1}
              max={packages.length}
              step={1}
              marks={packages.map((pkg, index) => ({
                value: index + 1,
                label: <span className="hidden sm:block">SSD {pkg.ssd}</span>,
              }))}
              onChange={(e, value) => handleSliderChange(value)}
            />
          </Box>
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 relative bg-[#EAEDF1] px-3 py-8 lg:py-8 mt-24">
          <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow-md text-center relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Other package details sections */}
              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Cpu size={30} strokeWidth={2} />
                  <p>CPU Cores</p>
                </div>
                <p>
                  <span className="text-3xl">{selectedPackage?.cpu}</span>
                  <span> CPU</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <ChartSpline size={30} strokeWidth={2} />
                  <p>IP Address</p>
                </div>
                <p>
                  <span className="text-3xl">{selectedPackage?.cpu}</span>
                  <span>IP</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Microchip size={30} strokeWidth={2} />
                  <p>Ram</p>
                </div>
                <p>
                  <span className="text-3xl">{selectedPackage?.cpu}</span>
                  <span>GB</span>
                </p>
              </div>
              
              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <Clock size={30} strokeWidth={2} />
                  <p>Traffic</p>
                </div>
                <p>
                  <span className="text-3xl">{selectedPackage?.cpu}</span>
                  <span>TB</span>
                </p>
              </div>

              <div className="bg-white border flex items-center justify-between p-6 rounded-md">
                <div className="flex items-center gap-3">
                  <HardDrive size={30} strokeWidth={2} />
                  <p>SSD Space</p>
                </div>
                <p>
                  <span className="text-3xl">{selectedPackage?.cpu}</span>
                  <span>GB</span>
                </p>
              </div>

              {/* Additional details */}
            </div>
          </div>

          <div className="w-full lg:w-2/6 static -mt-28">
            <div className="w-full bg-white shadow-lg p-6">
              <p className="text-[#fd235d] border-b pb-6">Managed*</p>
              <div className="space-y-3 text-center border-b pt-6 pb-6">
                <p className="font-semibold">
                  <span className="text-5xl ">TK {selectedPackage?.price}</span>
                  <span className="text-2xl"> /month</span>
                </p>
                {/* Use the dynamic link for the button */}
                <a
                  href={selectedPackage?.link}
                  className="bg-green-500 hover:bg-green-600 transition uppercase text-white text-nowrap px-4 py-2 rounded text-lg font-semibold"
                >
                  Order Now
                </a>
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
