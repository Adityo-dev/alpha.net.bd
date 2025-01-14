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
      {/* Advanced Features Section */}
      <section className="bg-[#dbece3] py-1">
        <div className="container mx-auto px-3 lg:px-6">
          <h2 className="text-3xl font-semibold text-center my-10">
            Advanced Features
          </h2>
          {/* Scrollable Wrapper */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white shadow-md p-6 rounded-md">
              {tableData.map((info, ind) => {
                const [firstWord, ...rest] = info.split(" ");
                return (
                  <div key={ind}>
                    <p className="border-b pb-4 capitalize flex items-center  gap-2">
                      <Check size={18} color="#a0a0a0" strokeWidth={1.2} />
                      <strong>{firstWord}</strong> {rest.join(" ")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and VideoTab Section */}
      <section className="container mx-auto px-3 xl:px-6 flex flex-col xl:flex-row gap-5 lg:gap-8 mt-1">
        <FAQ />
        <VideoTab />
      </section>
    </main>
  );
}

export default AdvancedFeatures;
