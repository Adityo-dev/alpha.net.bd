"use client";
// import lucide icons
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const customButtonStyles =
  " xl:absolute w-9 h-9 text-base text-xl bg-[#bbbbbb] text-white flex items-center justify-center border-none top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full xl:opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg";

export default function SliderCompanyImage({ companyData }) {
  return (
    <main className="relative container mx-auto px-3 lg:px-6 group">
      {/* Custom Navigation Buttons */}
      <div className="hidden xl:block">
        <div
          className={`${customButtonStyles} custom-productSlider-button-prev left-0 group-hover:opacity-1`}
        >
          <ChevronLeft strokeWidth={1.5} />
        </div>
        <div
          className={`${customButtonStyles} custom-productSlider-button-next right-0 group-hover:opacity-1`}
        >
          <ChevronRight strokeWidth={1.5} />
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-productSlider-button-next",
          prevEl: ".custom-productSlider-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {companyData.map((data, ind) => (
          <SwiperSlide key={ind}>
            <Image
              src={data?.image}
              width={400}
              height={400}
              alt={data?.alt}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
