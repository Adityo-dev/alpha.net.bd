"use client";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HostServiceFeatures from "../hostServiceFeatures/HostServiceFeatures";
import Link from "next/link";

const customButtonStyles =
  "absolute w-[50px] h-[50px] border-none top-1/2 z-30 cursor-pointer text-white p-3 rounded-full shadow-[0px_20px_30px_-10px_rgba(38,57,77)] text-2xl hidden lg:block";

function HeroSlider({ sliderData }) {
  return (
    <main className="bg-[#000F57] overflow-hidden sm:mb-80 md:mb-72 lg:mb-64 xl:mb-40">
      {/* Hero Slider Section */}
      <section className="container mx-auto px-3 lg:px-6 w-full h-[400px] sm:h-[550px] lg:h-[638px] overflow-hidden group">
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
            <SwiperSlide
              key={ind}
              className="w-full h-full flex bg-[#000F57] z-50"
            >
              <div className="flex w-full items-center mt-[3%]">
                {/* Text Section */}
                <div className="w-full xl:w-[65%] text-white flex items-center flex-col lg:items-start py-16 sm:py-16 xl:py-8">
                  <h1
                    className="text-4xl sm:text-5xl xl:text-6xl font-semibold text-center lg:text-start leading-[50px] sm:leading-[60px] xl:leading-[75px] tracking-tighter uppercase"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                  <p className="hidden sm:block text-center lg:text-start text-xl leading-8 my-6">
                    {data?.description}
                  </p>
                  <Link
                    href={data?.url}
                    className="bg-[#ff8c00] font-semibold px-6 py-3 mt-4 sm:mt-0"
                  >
                    View Details
                  </Link>
                </div>

                {/* Image Section */}
                <div className="xl:w-[30%] hidden lg:flex justify-center">
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

      {/* Host Service Features Section */}
      <section className="hidden sm:block absolute sm:top-[580px] lg:top-[660px] xl:top-[700px] 2xl:top-[780px] left-0 right-0 z-50">
        <HostServiceFeatures />
      </section>
    </main>
  );
}

export default HeroSlider;
