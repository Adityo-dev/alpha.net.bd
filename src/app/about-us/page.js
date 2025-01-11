import CompanyInfoTable from "@/components/about/CompanyInfoTable";
import HelpSection from "@/components/about/HelpSection ";
import SwiperPage from "@/components/about/SwiperPage";
import VisionMission from "@/components/about/VisionMission ";
import { Phone } from "lucide-react";
import Image from "next/image";

function AboutUS() {

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-65 transition-all duration-300"></div>
        <Image
          src={"/about-us-bg.jpg"}
          alt="about_us-Bg"
          width={2000}
          height={2000}
          className="w-full h-[19rem] object-cover"
        />
      </div>
      <div className="container mx-auto max-w-[1140px] px-2">
        <div className="pt-6">
          <p className="py-2 flex flex-col text-sm text-[#444444]"><span className="mb-4">Our Company has 99.9% SLA Up time and 24/7 non-stop customer service department. All of our hosting plans included with 30 days money back guarantee.</span>

            <span className="mb-4">Currently we are proudly serving 30+ countries around the world. As a rapidly growth and trusted company, you can depend on us to serve continuous reliable web hosting.Our fully automated system and 300+ Auto scripts Launch your Website Within Minutes!</span>

            <span className="mb-4">We offer Premium Web Hosting , Reseller Hosting and Virtual Private Server solutions brought to you by premium hardware. Our main intentions is delivering enterprise level solutions at affordable prices. If you’re thinking of moving from another host to us and find it hard to transfer all your files over, no worries, as we’ll do this for you free! All you have to do is sit back, relax and wait for your site to be up while our technicians do the transfers – We care for all our clients.</span></p>
        </div>
        <CompanyInfoTable />
        <VisionMission />

      </div>
      <div className="bg-[#F4F4F7]  py-10">
        <div className="container mx-auto max-w-[1140px] px-2 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold">HAVE ANY QUESTIONS?</h1>
          <p className="text-[#444444] text-sm">Do you want to take advantage of our <br /> special offers? Please call us today.</p>
          <a href="tel:+88 01823 662233" className="py-2 px-3 bg-[#8BC34A] rounded-lg text-white font-medium flex gap-2 items-center justify-center"><Phone size={16} /> +88 01823 662233</a>
        </div>
      </div>

      {/* Carusel problem thik korte hobe */}
      <div className="container mx-auto max-w-[1140px] px-2">
        {/* <SwiperPage /> */}
        <HelpSection />
      </div>

    </>
  );
}

export default AboutUS;
