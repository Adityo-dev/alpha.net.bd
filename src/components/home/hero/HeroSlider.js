"use client";
import Image from "next/image";
//
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

const customButtonStyles =
  "absolute w-[50px] h-[50px] border-none top-1/2 z-10 cursor-pointer text-white p-3 rounded-full shadow-[0px_20px_30px_-10px_rgba(38,57,77)] text-2xl hidden lg:block";

function HeroSlider({ sliderData }) {
  return (
    <main className="bg-[#37449A] overflow-hidden">
      <section className="container mx-auto px-3 lg:px-6 w-full h-[400px] sm:h-[638px]  overflow-hidden group">
        {/* Custom Navigation Buttons */}
        <div
          className={`${customButtonStyles} custom-heroSlider-button-prev left-12`}
        >
          <ChevronLeft size={28} strokeWidth={2.25} />
        </div>
        <div
          className={`${customButtonStyles} custom-heroSlider-button-next right-12`}
        >
          <ChevronRight size={28} strokeWidth={2.25} />
        </div>
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={{
            nextEl: ".custom-heroSlider-button-next",
            prevEl: ".custom-heroSlider-button-prev",
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {sliderData.map((data, ind) => (
            <SwiperSlide key={ind} className="w-full flex ">
              <div className="flex w-full items-center mt-[3%] bg-[#37449A] ">
                {/* Text Section */}
                <div className="w-full lg:w-[65%] text-white flex items-center flex-col sm:items-start py-16 sm:py-0">
                  <h1
                    className="text-4xl sm:text-6xl font-semibold text-center sm:text-start leading-[50px] sm:leading-[75px] tracking-tighter	uppercase"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                  <p className="hidden sm:block text-xl leading-8 my-6">
                    {data?.description}
                  </p>

                  <button className="bg-[#ff8c00] font-semibold px-6 py-3 mt-4 sm:mt-0 ">
                    View Details
                  </button>
                </div>

                {/* Image Section */}
                <div className="w-[30%] hidden lg:flex justify-center">
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
        </Swiper>
      </section>
    </main>
  );
}

export default HeroSlider;
