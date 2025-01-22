import { Handshake, Hotel, Users } from "lucide-react";
import Image from "next/image";
import DomainName from "../domainName/DomainName";

// data
const technologySolutionsData = [
  {
    icon: <Hotel color="#1174bc" size={28} strokeWidth={1.5} />,
    title: "Multiple Data Centers in USA & Bangladesh",
    description:
      "Alpha Net's servers are Hosted at multiple Data Centers in the USA & Bangladesh, with Gbps & BDIX connectivity. We build and manage our own infrastructure in the USA utilizing Enterprise Hardware, Tier-4 connectivity, and SSD RAID to ensure the highest performance, reliability & Security level.",
  },
  {
    icon: <Users color="#1174bc" size={28} strokeWidth={1.5} />,
    title: "5000+ Customers in 60+ Countries",
    description:
      "Alpha Net's clientele includes individuals and companies of all sizes. We have had more than Five Thousand Customers in 60+ Countries over the 24 Years",
  },
  {
    icon: <Handshake color="#1174bc" size={28} strokeWidth={1.5} />,
    title: "Our Technology & Partners",
    description:
      "Alpha Net helps customers with the highest quality service by connecting with the following valued partners:",
  },
];

function TechnologySolutions() {
  return (
    <main className="w-full bg-[#F8F9FA] relative">
      <section className="w-full container mx-auto px-3 lg:px-6 py-16 pb-48 flex flex-col xl:flex-row items-center gap-8 mb-36">
        <div className="w-full xl:w-3/5">
          <h2 className="text-3xl uppercase font-semibold mb-5 leading-10">
            <span className="text-[#1174bc]">Cloud & Technology</span> Solutions
            in Bangladesh
          </h2>
          <p className="text-lg leading-8 font-sans">
            Alpha Net is a leading USA-based Cloud & Technology Solutions
            company that has been offering enterprise-level IT Infrastructure in
            Bangladesh since 2001. Extremely Fast Dedicated & Virtual Servers,
            Secure Web Hosting & Business Email Hosting, and Expert Support with
            a 100% uptime guarantee!
          </p>

          <div className="space-y-6 mt-6">
            {technologySolutionsData.map((info, ind) => (
              <div key={ind}>
                <div className="flex items-center gap-2">
                  <h2>{info?.icon}</h2>
                  <h2 className="text-xl font-semibold">{info?.title}</h2>
                </div>
                <p className="text-lg leading-8 font-sans mt-2">
                  {info?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-5/12">
          <Image
            src={"/dinisoft-office.jpg"}
            width={400}
            height={400}
            alt=""
            className="max-w-[400px] xl:max-w-[550px] max-h-[500px] mx-auto w-full h-full"
          />
        </div>
      </section>

      <section className="absolute left-0 right-0 bottom-16">
        <DomainName />
      </section>
    </main>
  );
}

export default TechnologySolutions;
