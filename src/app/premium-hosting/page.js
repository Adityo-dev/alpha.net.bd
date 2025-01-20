import AdvancedFeatures from "@/components/premiumHosting/Advanced Features/AdvancedFeatures";
import Banner from "@/components/premiumHosting/banner/Banner";
import CloudLinuxTable from "@/components/premiumHosting/cloudLinuxTable/CloudLinuxTable";
import PremiumHostingFeatures from "@/components/premiumHosting/premiumHostingFeatures/PremiumHostingFeatures";
import PremiumHostingPlan from "@/components/premiumHosting/premiumHostingPlan/PremiumHostingPlan";

import Image from "next/image";
// data
const plans = [
  {
    prm: "Prm50",
    name: "Premium 50",
    price: 500,
    features: {
      hosting: "5 Website Hosted",
      storage: "50GB NVMe Storage",
      bandwidth: "Unlimited Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "3 Daily Backup For 90 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    prm: "Prm100",
    name: "Premium 100",
    price: 800,
    features: {
      hosting: "5 Website Hosted",
      storage: "50GB NVMe Storage",
      bandwidth: "Unlimited Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "3 Daily Backup For 90 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    prm: "Prm pro",
    name: "Premium pro",
    price: 1500,
    features: {
      hosting: "5 Website Hosted",
      storage: "50GB NVMe Storage",
      bandwidth: "Unlimited Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "3 Daily Backup For 90 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    powerful: "Powerful Hosting",
    name: "Vps hosting",
    price: 3000,
    powerfulFeatures: {
      processor: "3 Core Processor",
      ram: "6 GB RAM DDR4",
      storage: "100GB SSD Storage",
      bandwidth: "4TB Bandwidth",
      dedicatedIP: "1 Dedicated IP",
      rootAccess: "Full Root Access",
      deliveryTime: "Delivery Time up to 24 hours",
      moneyback: "No Moneyback available",
    },
  },
];

function PremiumHosting() {
  return (
    <main className="relative w-full space-y-12">
      <section className="bg-[#F5F5F5] space-y-12">
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
        <Banner />
      </section>
      <AdvancedFeatures />
      <PremiumHostingFeatures />
    </main>
  );
}

export default PremiumHosting;
