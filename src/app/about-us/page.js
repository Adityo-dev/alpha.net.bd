import AnyQuestions from "@/components/about/AnyQuestions";
import CompanyInfoTable from "@/components/about/CompanyInfoTable";
import SliderCompanyImage from "@/components/about/SliderCompanyImage";
import VisionMission from "@/components/about/VisionMission ";
import Image from "next/image";

// data
const companyData = [
  { image: "/Directadmin.png", alt: "Directadmin logo" },
  { image: "/Drupal.png", alt: "Drupal logo" },
  { image: "/Gsuit.png", alt: "Gsuit logo" },
  { image: "/Imunify360.png", alt: "Imunify360 logo" },
  { image: "/Joomla.png", alt: "Joomla logo" },
  { image: "/Litespeed.png", alt: "Litespeed logo" },
  { image: "/LOGO-DIANAHOST-11.png", alt: "LOGO-DIANAHOST-11 logo" },
  { image: "/Magento.png", alt: "Magento logo" },
  { image: "/Malwarebytes.png", alt: "Malwarebytes logo" },
];

function AboutUS() {
  return (
    <main className="space-y-12">
      <section>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-black bg-opacity-65 transition-all duration-300"></div>
          <Image
            src={"/dinisoft-office.jpg"}
            alt="about_us_Bg"
            width={2000}
            height={2000}
            className="w-full h-64 md:h-80 object-fill"
          />
        </div>
        <div className="container mx-auto px-3 lg:px-6">
          <div className="pt-6">
            <p className="py-2 flex flex-col text-sm text-[#444444]">
              <span className="mb-4">
              Dinisoft BD was founded on Feb 01, 2007. Dinisoft BD is the world class best web hosting company in Bangladesh. We provide domain, hosting, reseller hosting, vps, rdp, vpn, dedicated server, live streaming server, resell all kinds of dedicated server, web design and software development services in Bangladesh and other countries.
              </span>

              <span className="mb-4">
              We manage our servers from USA, UK, Germany, India, Singapore, and Bangladesh(BDIX Network) in various award-winning and top-rated data centers. Our servers are SSD RAID/NVMe to ensure data protection and the best quality hosting services. We don’t have any hidden facts or costs. Always maintain the highest level of hosting server quality with data loss protection and the latest security shield.
              </span>
            </p>
          </div>
        </div>
      </section>

      <CompanyInfoTable />
      <VisionMission />
      <AnyQuestions />
      <SliderCompanyImage companyData={companyData} />
    </main>
  );
}

export default AboutUS;
