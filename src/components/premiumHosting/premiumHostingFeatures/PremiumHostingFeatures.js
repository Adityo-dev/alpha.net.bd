import Image from "next/image";

// data
const premiumHostingFeaturesData = [
  {
    image: "/nvme.png",
    title: "NVMe Up to 220% Faster",
    description:
      "We use 100% Enterprise-Grade NVMe Samsung Drives with full RAID protection.",
  },
  {
    image: "/cpp1.png",
    title: "cPanel Control Panel",
    description:
      "World famous control panel name cPanel, You will find there user friendly.",
  },
  {
    image: "/jetbackup1.png",
    title: "3x Daily Backups",
    description:
      "3x Daily automated backups for all your website files, databases. You don’t have to do a thing!",
  },
  {
    image: "/Uptime-SLA-Icon-large-gp-blue.png",
    title: "99.9% Uptime Guarantee",
    description:
      "Our servers have been designed to ensure that your websites stay online without downtime. Our uptime is backed by our SLA.",
  },
  {
    image: "/migration.png",
    title: "Free Migration Service",
    description:
      "If you have any website to different server, Will try to migrate this website from other server to our server.",
  },
  {
    image: "/cloudlinux.png",
    title: "Money Back Guarantee",
    description:
      "If your not completely satisfied, simply cancel and request a refund within 7 days. We also don't tie our customers in - ever.",
  },
  {
    image: "/cloud-speeds-2-4.png",
    title: "Free SSL Certificate",
    description:
      "Free SSL Certificate, automated, and open certificate authority brought to you by the non-profit Internet Security",
  },
  {
    image: "/ic3.png",
    title: "Advance security system",
    description:
      "Our security expert real time monitor each website for security reason.",
  },
];

function PremiumHostingFeatures() {
  return (
    <section className="container mx-auto  px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        Premium Hosting Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
        {premiumHostingFeaturesData.map((features, ind) => (
          <div
            key={ind}
            className="border-y-4 border-r-8 border-[#166195] rounded-xl text-center space-y-3 p-2"
          >
            <Image
              src={features?.image}
              width={400}
              height={400}
              alt={features?.title}
              className="max-w-40 w-full mx-auto"
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
