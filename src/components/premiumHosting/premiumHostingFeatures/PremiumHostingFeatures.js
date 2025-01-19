import Image from "next/image";

// data
const premiumHostingFeaturesData = [
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/ic3.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
];
function PremiumHostingFeatures() {
  return (
    <section className="container mx-auto  px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        Premium Hosting Features
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {premiumHostingFeaturesData.map((features, ind) => (
          <div
            key={ind}
            className="border-y-4 border-r-8 border-[#8EC151] rounded-xl text-center space-y-3 p-2"
          >
            <Image
              src={features?.image}
              width={400}
              height={400}
              alt=""
              className="w-48 mx-auto"
            />
            <h2 className="text-xl font-semibold">{features?.title}</h2>
            <h2 className="leading-8">{features?.description}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PremiumHostingFeatures;
