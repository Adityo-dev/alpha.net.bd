// components
import { Check } from "lucide-react";
import FAQ from "./faq/FAQ";
import VideoTab from "./videoTab/VideoTab";
// data
const tableData = [
  "30 Day Money back guarantee",
  "softaculous script installer",
  "20 GBPS DDoS protection",
  "server side includes",
  "90.9% server uptime guarantee",
  "malware & exploit scanning",
  "unlimited auto responders",
  "Curl / Gd2 / imageMagick",
  "30 Day Money back guarantee",
  "softaculous script installer",
  "20 GBPS DDoS protection",
  "server side includes",
  "90.9% server uptime guarantee",
  "malware & exploit scanning",
  "unlimited auto responders",
  "Curl / Gd2 / imageMagick",
  "FREE Day Money back guarantee",
  "Curl / Gd2 / imageMagick",
  "30 Day Money back guarantee",
  "softaculous script installer",
  "90.9% server uptime guarantee",
  "malware & exploit scanning",
  "unlimited auto responders",
  "Curl / Gd2 / imageMagick",
];

function AdvancedFeatures() {
  return (
    <main>
      <section className="bg-[#dbece3] px-6 py-1">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center my-8">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-md p-6 rounded-md">
            {tableData.map((info, ind) => {
              const [firstWord, ...rest] = info.split(" ");
              return (
                <div key={ind}>
                  <p className="border-b pb-4 capitalize flex items-center gap-2">
                    <Check size={18} color="#a0a0a0" strokeWidth={1.2} />
                    <strong>{firstWord}</strong> {rest.join(" ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-3 md:px-6 flex flex-col lg:flex-row gap-5 md:gap-8 mt-1">
        <FAQ />
        <VideoTab />
      </section>
    </main>
  );
}

export default AdvancedFeatures;
