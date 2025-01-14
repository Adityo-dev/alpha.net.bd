// components
import AvailableOperatingSystems from "@/components/dedicatedServer/availableOperatingSystems/AvailableOperatingSystems";
import MakesExonHost from "@/components/dedicatedServer/makesExonHost/MakesExonHost";
import Processor from "@/components/dedicatedServer/processor/Processor";
import VirtualServers from "@/components/dedicatedServer/virtualServers/VirtualServers";
import WhereToStart from "@/components/dedicatedServer/whereToStart/WhereToStart";

// data

const processorData = [
  {
    title: "Single Processor",
    description: "Sort a list of servers by clicking on the column header",
    info: [
      {
        image: "/intel-icon.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
      {
        image: "/intel-icon.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
      {
        image: "/intel-icon.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
      {
        image: "/intel-icon.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
      {
        image: "/ryzen.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
      {
        image: "/ryzen.png",
        name: "Intel Xeon E3 1240 V5",
        cores: "6",
        ghz: "3.5",
        memory: "16 GB DDR4 ECC",
        speed: "4 X 3.5 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "13,860",
      },
    ],
  },
  {
    title: "Dual CPU Servers",
    description: "Sort a list of servers by clicking on the column header",
    info: [
      {
        image: "/intel-icon.png",
        name: "Dual Intel Xeon E5 2670 v3",
        cores: "12",
        ghz: "2.3",
        memory: "32 GB DDR4 ECC",
        speed: "12 X 2.3 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "23,700",
      },
      {
        image: "/intel-icon.png",
        name: "Dual Intel Xeon E5 2680 v4",
        cores: "28",
        ghz: "2.4",
        memory: "32 GB DDR4 ECC",
        speed: "20 X 2.2 GHz",
        storage: "2X500 GB SSD",
        transfer: "10TB",
        tk: "28,290",
      },
    ],
  },
];
//
const availableOperatingSystemsData = [
  { image: "/operating-systems-icon-1.png", name: "OpenB SD" },
  { image: "/operating-systems-icon-2.png", name: "Ubuntu" },
  { image: "/operating-systems-icon-3.png", name: "Free BSD" },
  { image: "/operating-systems-icon-4.png", name: "CentOS" },
  { image: "/operating-systems-icon-5.png", name: "Debian" },
  { image: "/operating-systems-icon-6.png", name: "Gentoo" },
  { image: "/operating-systems-icon-7.png", name: "Window server" },
  { image: "/operating-systems-icon-8.png", name: "Fedora" },
  { image: "/operating-systems-icon-9.png", name: "Core OS" },
  { image: "/operating-systems-icon-10.png", name: "Open SU SE" },
];
//

const virtualServersData = [
  {
    image: "/vps-bonus-icon-1.png",
    title: "Solid Security",
    description:
      "We harden each VPS by our security experts and guard with a security protocol tailored to your environment.",
  },
  {
    image: "/vps-bonus-icon-2.png",
    title: "Fully Managed",
    description:
      "We run your server so you can run your business. This means that we provide full support and management for your server.",
  },
  {
    image: "/vps-bonus-icon-3.png",
    title: "cPanel/WHM Available",
    description:
      "We provide fully Managed service with cPanel. You need to select cPanel license in order form. Without cPanel license, server will be unmanaged.",
  },
  {
    image: "/vps-bonus-icon-4.png",
    title: "Full Root Access",
    description:
      "The full power of the server! Having root access to the server gives you the ability to take full control of your server.",
  },
  {
    image: "/vps-bonus-icon-3.png",
    title: "cPanel/WHM Available",
    description:
      "We provide fully Managed service with cPanel. You need to select cPanel license in order form. Without cPanel license, server will be unmanaged.",
  },
  {
    image: "/vps-bonus-icon-1.png",
    title: "Solid Security",
    description:
      "We harden each VPS by our security experts and guard with a security protocol tailored to your environment.",
  },
];

const makesExonHostData = [
  {
    image: "/different-exonhost-box-1.png",
    title: "99.9% Uptime Gurarantee",
    description:
      "We understand the uptime importance. We pledge to deliver in excess of 99.9% uptime, each and every month.",
  },
  {
    image: "/different-exonhost-box-2.png",
    title: "Money-back gurarantee",
    description:
      "We do not offer any money back gurantee for Dedicated Server. It's non refundable service.",
  },
  {
    image: "/different-exonhost-box-3.png",
    title: "Free 24/7 Professional Support",
    description:
      "Our customer support is 24x7x365. With your hosting package you also gain 24x7 accesses to our expert support team.",
  },
  {
    image: "/different-exonhost-box-1.png",
    title: "Free SSL Certificate",
    description:
      "We are offering Unlimited SSL for Free. Easy to install/auto-renewed Let's Encrypt SSL certificates can help secure your websites.",
  },
  {
    image: "/different-exonhost-box-1.png",
    title: "99.9% Uptime Gurarantee",
    description:
      "We understand the uptime importance. We pledge to deliver in excess of 99.9% uptime, each and every month.",
  },
  {
    image: "/different-exonhost-box-3.png",
    title: "Free 24/7 Professional Support",
    description:
      "Our customer support is 24x7x365. With your hosting package you also gain 24x7 accesses to our expert support team.",
  },
];

function DedicatedServer() {
  return (
    <main>
      <section className="relative w-full h-full">
        {/* Banner Section */}
        <div
          style={{
            backgroundImage: `url('/dedicated-servers-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full lg:h-96 flex flex-col items-center justify-center text-white lg:absolute top-0 px-4 py-12 lg:py-0"
        >
          <h2 className="text-5xl leading-[55px] capitalize mb-3 text-center">
            Fully Managed <strong>Dedicated Servers</strong>
          </h2>
          <p className="opacity-70 text-center">
            Weve in house support team for 24/7 operation. They provide
            onboarding help, <br className="hidden md:block" /> free website
            transfer and ongoing assistance at any time.
          </p>
        </div>

        <div className="space-y-12">
          <div className="pt-0 lg:pt-72">
            <Processor processorData={processorData} />
          </div>

          <AvailableOperatingSystems
            availableOperatingSystemsData={availableOperatingSystemsData}
          />
          <VirtualServers virtualServersData={virtualServersData} />
          <MakesExonHost makesExonHostData={makesExonHostData} />
          <WhereToStart />
        </div>
      </section>
    </main>
  );
}

export default DedicatedServer;
