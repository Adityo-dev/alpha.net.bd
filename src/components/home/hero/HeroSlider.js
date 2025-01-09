"use client";
import Image from "next/image";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import Link from "next/link";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const customButtonStyles =
  "absolute w-[50px] h-[50px] border-none top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white text-custom-secondary p-3 rounded-full opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0px_20px_30px_-10px_rgba(38,57,77)] text-2xl";

function HeroSlider({ sliderData }) {
  return (
    <main className="bg-[#374399]">
      <section className="container mx-auto px-6 cursor-pointer">
        <div className="relative w-full h-[15vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] group overflow-hidden">
          {/* Custom Navigation Buttons */}
          <div
            className={`${customButtonStyles} custom-button-prev -left-6 group-hover:left-0 rounded-l-lg`}
          >
            {/* <IoIosArrowBack /> */}
          </div>
          <div
            className={`${customButtonStyles} custom-button-next -right-6 group-hover:right-0 rounded-r-lg`}
          >
            {/* <IoIosArrowForward /> */}
          </div>

          <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="w-full h-full"
          >
            {sliderData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-between items-center mt-12">
                    <div className="w-[60%]">
                      <h1 className="text-6xl uppercase text-white tracking-tight leading-[80px]">
                        {data?.title}
                      </h1>
                      <p className="my-6 text-white text-xl tracking-widest">
                        {data?.description}
                      </p>

                      <div className="flex  items-center gap-6">
                        {data?.infoData?.map((data, ind) => (
                          <Link href={""} key={ind}>
                            {data?.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="w-[40%]">
                      <Image
                        className="w-full h-full object-contain"
                        src={data?.image}
                        width={1700}
                        height={800}
                        alt={"image alt"}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default HeroSlider;
