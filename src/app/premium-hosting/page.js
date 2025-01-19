import AdvancedFeatures from "@/components/premiumHosting/Advanced Features/AdvancedFeatures";
import CloudLinuxTable from "@/components/premiumHosting/cloudLinuxTable/CloudLinuxTable";
import PremiumHostingFeatures from "@/components/premiumHosting/premiumHostingFeatures/PremiumHostingFeatures";
import PremiumHostingPlan from "@/components/premiumHosting/premiumHostingPlan/PremiumHostingPlan";

import Image from "next/image";
// data
const plans = [
  {
    id: 1,
    name: "Premium 50",
    price: 500,
    features: [
      "5 Website Hosted",
      "50GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Sub Domain",
      "Unlimited Email Accounts",
      "Shell (SSH) Access",
      "3 Daily Backup For 90 Days",
      "Priority Ticket Support",
    ],
  },
  {
    id: 2,
    name: "Premium 50",
    price: 500,
    features: [
      "5 Website Hosted",
      "50GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Sub Domain",
      "Unlimited Email Accounts",
      "Shell (SSH) Access",
      "3 Daily Backup For 90 Days",
      "Priority Ticket Support",
    ],
  },
  {
    id: 3,
    name: "Premium 50",
    price: 500,
    features: [
      "5 Website Hosted",
      "50GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Sub Domain",
      "Unlimited Email Accounts",
      "Shell (SSH) Access",
      "3 Daily Backup For 90 Days",
      "Priority Ticket Support",
    ],
  },
  {
    id: 4,
    name: "Premium 50",
    price: 500,
    features: [
      "5 Website Hosted",
      "50GB NVMe Storage",
      "Unlimited Bandwidth",
      "Unlimited Sub Domain",
      "Unlimited Email Accounts",
      "Shell (SSH) Access",
      "3 Daily Backup For 90 Days",
      "Priority Ticket Support",
    ],
  },
];

function PremiumHosting() {
  return (
    <main className="relative w-full space-y-12">
      <header
        style={{
          backgroundImage: `url('/web-hosting-.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-3 lg:px-6  lg:h-96 flex flex-col gap-6 items-center justify-center text-white  py-12 lg:py-0">
          <div>
            <Image
              src={"/server-dedicated.png"}
              width={400}
              height={400}
              alt="server-dedicated"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl leading-[55px] capitalize mb-3 text-center">
              Premium NVMe Performance Web Hosting
            </h2>
            <p className="text-base sm:text-lg text-center">
              Powerful cPanel Hosting designed for larger, more demanding
              websites or e-commerce
            </p>
          </div>
        </div>
      </header>

      <PremiumHostingPlan plans={plans} />
      <CloudLinuxTable />

      <AdvancedFeatures />
      <PremiumHostingFeatures />
    </main>
  );
}

export default PremiumHosting;
