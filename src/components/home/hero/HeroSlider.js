"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function HeroSlider({ sliderData }) {
  return (
    <section className="bg-red-500">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper container mx-auto px-6 w-full h-[70vh]"
      >
        <div>
          {sliderData.map((data, ind) => (
            <SwiperSlide key={ind} className="w-full flex">
              <div className="flex w-full items-center p-6">
                {/* Text Section */}
                <div className="w-[60%] text-white">
                  <p className="text-4xl uppercase">{data?.title}</p>
                </div>

                {/* Image Section */}
                <div className="w-[40%] flex justify-center">
                  <Image
                    src={data?.image}
                    width={600}
                    height={600}
                    alt="s"
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
