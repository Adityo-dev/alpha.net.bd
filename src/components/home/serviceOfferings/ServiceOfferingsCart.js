import Image from "next/image";
import Link from "next/link";
// icon
import { Play } from "lucide-react";
import DynamicButton1 from "@/components/buttonGroup/DynamicButton1";

function ServiceOfferingsCart({ serviceOfferingsData }) {
  return (
    <div
      className="flex flex-col gap-2 border border-[#DFDFDF] px-6 py-4 rounded-lg justify-between"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <p
        className={`w-28 h-28 flex items-center justify-center mx-auto mb-4 rounded-full text-emerald-400`}
        style={{
          color: serviceOfferingsData?.color,
          border: `1px solid ${serviceOfferingsData?.color}`,
        }}
      >
        {serviceOfferingsData?.image}
      </p>
      <h3 className="text-2xl font-semibold uppercase text-center tracking-wide">
        {serviceOfferingsData?.title}
      </h3>

      {serviceOfferingsData?.form ? (
        <p className="text-center">{serviceOfferingsData?.form}</p>
      ) : null}

      {serviceOfferingsData?.details.map((info, ind) => (
        <Link
          href={info?.url}
          key={ind}
          className="flex items-center gap-2 text-[#444]"
        >
          <span>
            <Play
              size={18}
              color={serviceOfferingsData?.color}
              strokeWidth={1.5}
            />
          </span>
          <span className="underline">{info?.name}</span>
        </Link>
      ))}
      <div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="max-w-80 w-full mx-auto flex gap-1 mt-4">
            <DynamicButton1
              btnName={"View details"}
              btnUrl={"#"}
              color={serviceOfferingsData?.color}
              transparent={true}
            />

            <DynamicButton1
              btnName={"View plans"}
              btnUrl={"#"}
              color={serviceOfferingsData?.color}
              transparent={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOfferingsCart;
