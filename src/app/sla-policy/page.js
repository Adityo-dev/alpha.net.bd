import Image from "next/image";
import React from "react";

const slaPolicy = () => {
  return (
    <div className="max-w-[1452px] mx-auto p-6">
        <div>
                 <Image
                    src={"/services/SLAPolicy.png"}
                    alt="about_us_Bg"
                    width={2000}
                    height={2000}
                    className="w-full h-64 md:h-80 object-fill"
                 />
        </div>
      <h1 className="text-3xl font-bold mb-4 mt-8 text-[#46494c]">SLA Policy</h1>

      <section className="mb-8 text-[#686e78]">
        <p className="mb-4">If Your service experiences uptime below 99.9% in any given month, You will receive a credit for one free month. To claim this credit, it must be done within 7 days of our monitoring showing uptime below this level. </p>
        <p className="mb-4">Please note that planned maintenance work is exempt from this guarantee. Dedicated servers do not currently have an SLA. Uptime levels are calculated using our status page and monitoring systems exclusively.</p>
       
      </section>

   
    </div>
  );
};

export default slaPolicy;
