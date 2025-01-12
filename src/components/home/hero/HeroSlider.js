"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function HeroSlider({ sliderData }) {
  return (
    <main className="bg-[#37449A]">
      <section className="container mx-auto px-6 w-full h-[70vh]">
        <Swiper
          navigation={true}
          effect="fade"
          modules={[Navigation]}
          className="mySwiper"
        >
          <div>
            {sliderData.map((data, ind) => (
              <SwiperSlide key={ind} className="w-full flex">
                <div className="flex w-full items-center mt-[3%]">
                  {/* Text Section */}
                  <div className="w-[65%] text-white">
                    <h1
                      className="text-6xl font-semibold leading-[75px] tracking-tighter	uppercase"
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                    <p className="text-xl leading-8 my-6">
                      {data?.description}
                    </p>

                    <button className="bg-[#ff8c00] font-semibold px-6 py-3 ">
                      View Details
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="w-[30%] flex justify-center">
                    <Image
                      src={data?.image}
                      width={600}
                      height={600}
                      alt="slider image"
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </main>
  );
}
