import { Handshake, Hotel, Users } from "lucide-react";
import Image from "next/image";
import DomainName from "../domainName/DomainName";

// data
const technologySolutionsData = [
 
  
];

function TechnologySolutions() {
  return (
    <main className="w-full bg-[#F8F9FA] relative">
      <section className="w-full container mx-auto px-3 lg:px-6 py-16 pb-48 flex flex-col xl:flex-row items-center gap-8">
        <div className="w-full xl:w-3/5">
          <h2 className="text-3xl uppercase font-semibold mb-5 leading-10">
            <span className="text-[#1174bc]">Fresh Computing</span>  Solution in Bangladesh.
          </h2>
          <p className="text-lg leading-8 font-sans">
          Dinisoft BD was founded on Feb 01, 2007. Dinisoft BD is the world class best web hosting company in Bangladesh. We provide domain, hosting, reseller hosting, vps, rdp, vpn, dedicated server, live streaming server, resell all kinds of dedicated server, web design and software development services in Bangladesh and other countries. We manage our servers from USA, UK, Germany, India, Singapore, and Bangladesh(BDIX Network) in various award-winning and top-rated data centers. Our servers are SSD RAID/NVMe to ensure data protection and the best quality hosting services. We don’t have any hidden facts or costs. Always maintain the highest level of hosting server quality with data loss protection and the latest security shield.
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
