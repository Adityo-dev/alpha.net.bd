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

export default function TestimonialSlider({ testimonialData }) {
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {testimonialData.map((data, ind) => (
          <SwiperSlide key={ind}>
            <div className="space-y-3">
              <p className="text-sm sm:text-base">{data?.companyName}</p>
              <p className="text-sm sm:text-base">{data?.description}</p>
              <p className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 sm:w-12 h-[1px] gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.933 5.784 1.4 8.171L12 18.896l-7.335 3.869 1.4-8.171L.133 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </span>

                <span className="font-semibold">{data?.name}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
