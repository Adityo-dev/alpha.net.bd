// components
import AvailableOperatingSystems from "@/components/dedicatedServer/availableOperatingSystems/AvailableOperatingSystems";
import SingleProcessor from "@/components/dedicatedServer/singleProcessor/SingleProcessor";
import VirtualServers from "@/components/dedicatedServer/virtualServers/VirtualServers";

// data

const singleProcessorData = [
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
          className="w-full h-96 flex flex-col items-center justify-center text-white absolute top-0"
        >
          <h2 className="text-5xl capitalize mb-3">
            Fully Managed <strong>Dedicated Servers</strong>
          </h2>
          <p className="opacity-70 text-center">
            Weve in house support team for 24/7 operation. They provide
            onboarding help, <br /> free website transfer and ongoing assistance
            at any time.
          </p>
        </div>

        <div className="space-y-16">
          <div className="pt-80">
            <SingleProcessor singleProcessorData={singleProcessorData} />
          </div>

          <AvailableOperatingSystems
            availableOperatingSystemsData={availableOperatingSystemsData}
          />
          <VirtualServers virtualServersData={virtualServersData} />
        </div>
      </section>
    </main>
  );
}

export default DedicatedServer;
