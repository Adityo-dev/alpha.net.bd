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
    name: "Basic",
    price: 1000,
    link: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting/1gb-pure-nvme-ssd",
    features: {
      hosting: "1 Website Hosted",
      storage: "1GB NVMe Storage",
      bandwidth: "10GB Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "Backup For 3 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    prm: "Prm100",
    name: "Standard ",
    price: 1500,
    link: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting/3g-dedicated-server",
    features: {
      hosting: "2 Website Hosted",
      storage: "5 GB NVMe Storage",
      bandwidth: "50GB Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "Backup For 3 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    prm: "Prm pro",
    name: "Business",
    price: 2500,
    link: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting/10gb-nvme-ssd",
    features: {
      hosting: "5 Website Hosted",
      storage: "10 GB NVMe Storage",
      bandwidth: "100GB Bandwidth",
      subDomain: "Unlimited Sub Domain",
      emailAccounts: "Unlimited Email Accounts",
      sshAccess: "Shell (SSH) Access",
      backup: "Backup For 3 Days",
      support: "Priority Ticket Support",
    },
  },
  {
    powerful: "Powerful Hosting",
    name: "Premium",
    price: 4000,
    link: "https://login.dinihost.com/index.php?rp=/store/ssd-shared-hosting/2gb-nvme-ssd-hosting",
    powerfulFeatures: {
      processor: "5 Website Hosted",
      ram: "20 GB NVMe Storage",
      storage: "200GB Bandwidth",
      bandwidth: "Unlimited Sub Domain",
      dedicatedIP: "Unlimited Email Accounts",
      rootAccess: "Shell (SSH) Access",
      deliveryTime: "Backup For 3 Days",
      moneyback: "Priority Ticket Support",
    },
  },
];

function PremiumHosting() {
  return (
    <main className="relative w-full space-y-6 sm:space-y-12">
      <section className="bg-[#F5F5F5] space-y-12">
        <header
          style={{
            backgroundImage: `url('/Shared-Hosting.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-3 lg:px-6  lg:h-96 flex flex-col gap-6 items-center justify-center text-white  py-12 lg:py-0">
            {/* <div>
              <h2 className="text-5xl leading-[55px] capitalize mb-3 text-center">
                Premium NVMe Performance Web Hosting
              </h2>
              <p className="text-base sm:text-lg text-center">
                Powerful cPanel Hosting designed for larger, more demanding
                websites or e-commerce
              </p>
            </div> */}
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
