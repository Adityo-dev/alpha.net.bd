"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function SliderProduct({ domainNameData }) {
  return (
    <main className="relative ps-4 md:ps-12">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full bg-transparent"
      >
        {domainNameData.map((data, ind) => (
          <SwiperSlide key={ind}>
            <div className="bg-white shadow-sm rounded-lg flex flex-col gap-1 items-center justify-center py-2">
              <Image
                src={data?.image}
                width={400}
                height={400}
                alt={""}
                className="w-12 h-12 object-contain"
              />
              {(data?.currentPrice || data?.sell) && (
                <p className="flex items-center gap-2">
                  {data?.currentPrice && (
                    <span className="text-lg font-semibold">
                      ${data?.currentPrice}
                    </span>
                  )}
                  {data?.sell && (
                    <span className="bg-[#C62300] px-1.5 py-0.5 rounded-md text-xs text-white">
                      SELL
                    </span>
                  )}
                </p>
              )}
              {data?.oldPrice && (
                <del className="opacity-65 font-semibold">
                  ${data?.oldPrice}
                </del>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
