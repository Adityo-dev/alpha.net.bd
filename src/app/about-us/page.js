import CompanyInfoTable from "@/components/about/CompanyInfoTable";
import HelpSection from "@/components/about/HelpSection ";
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
          alt="about_us_Bg"
          width={2000}
          height={2000}
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
      <div className="container mx-auto px-3 lg:px-6">
        <div className="pt-6">
          <p className="py-2 flex flex-col text-sm text-[#444444]">
            <span className="mb-4">
              Our Company has 99.9% SLA Up time and 24/7 non-stop customer
              service department. All of our hosting plans included with 30 days
              money back guarantee.
            </span>

            <span className="mb-4">
              Currently we are proudly serving 30+ countries around the world.
              As a rapidly growth and trusted company, you can depend on us to
              serve continuous reliable web hosting.Our fully automated system
              and 300+ Auto scripts Launch your Website Within Minutes!
            </span>

            <span className="mb-4">
              We offer Premium Web Hosting , Reseller Hosting and Virtual
              Private Server solutions brought to you by premium hardware. Our
              main intentions is delivering enterprise level solutions at
              affordable prices. If you’re thinking of moving from another host
              to us and find it hard to transfer all your files over, no
              worries, as we’ll do this for you free! All you have to do is sit
              back, relax and wait for your site to be up while our technicians
              do the transfers – We care for all our clients.
            </span>
          </p>
        </div>
        <CompanyInfoTable />
        <VisionMission />
      </div>
      <div className="bg-[#F4F4F7] py-10 my-10">
        <div className="container mx-auto px-2 flex flex-col lg:flex-row gap-5 items-center text-center lg:text-start justify-between">
          <h1 className="text-2xl md:text-4xl font-semibold">
            HAVE ANY QUESTIONS?
          </h1>
          <p className="text-[#444444]">
            Do you want to take advantage of our special offers? Please call us
            today.
          </p>
          <a
            href="tel:+88 01823 662233"
            className="py-3 px-4 bg-[#8BC34A] rounded-lg text-white font-medium flex gap-2 items-center justify-center"
          >
            <Phone size={16} /> +88 01823 662233
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
