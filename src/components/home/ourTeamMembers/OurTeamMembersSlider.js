"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const customButtonStyles =
  "xl:absolute w-9 h-9 text-base text-xl bg-[#bbbbbb] text-white flex items-center justify-center border-none top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full xl:opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg";

export default function OurTeamMembersSlider({ ourTeamMembersData }) {
  return (
    <main className="relative container mx-auto px-3 lg:px-6 group">
      {/* Custom Navigation Buttons */}
      <div className="hidden xl:block">
        <div
          className={`${customButtonStyles} custom-teamMembers-button-prev left-0 group-hover:opacity-1`}
        >
          <ChevronLeft strokeWidth={1.5} />
        </div>
        <div
          className={`${customButtonStyles} custom-teamMembers-button-next right-0 group-hover:opacity-1`}
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
          nextEl: ".custom-teamMembers-button-next",
          prevEl: ".custom-teamMembers-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {ourTeamMembersData.map((member, ind) => (
          <SwiperSlide key={ind}>
            <div className="border border-b-2 border-b-[#0E9AFF] text-center pb-4">
              <Image
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
                width={180}
                height={180}
              />
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
