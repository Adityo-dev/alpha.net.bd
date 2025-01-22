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
                Our Company has 99.9% SLA Up time and 24/7 non-stop customer
                service department. All of our hosting plans included with 30
                days money back guarantee.
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
                affordable prices. If you’re thinking of moving from another
                host to us and find it hard to transfer all your files over, no
                worries, as we’ll do this for you free! All you have to do is
                sit back, relax and wait for your site to be up while our
                technicians do the transfers – We care for all our clients.
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
