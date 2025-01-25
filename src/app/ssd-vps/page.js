// components
import VpsSelector from "@/components/ssdVps/VpsSelector";
import VpsTable from "@/components/ssdVps/VpsTable";

const tableData = [
  {
    title: "BDIX KVM VPS",
    info: [
      {
        planName: "1G",
        speed: "1vCore",
        memory: "2 GB",
        diskSpace: "20 GB",
        ip: "1",
        bandwidth: "500 GB",
        price: "800",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-starter-vps",
      },
      {
        planName: "2G",
        speed: "2vCore",
        memory: "4 GB",
        diskSpace: "50 GB",
        ip: "1",
        bandwidth: "1 TB",
        price: "1500",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-standard-vps",
      },
      {
        planName: "3G",
        speed: "4vCore",
        memory: "8 GB",
        diskSpace: "100 GB",
        ip: "1",
        bandwidth: "1 TB",
        price: "3500",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-business-vps",
      },
      {
        planName: "4G",
        speed: "8vCore",
        memory: "16 GB",
        diskSpace: "150 GB",
        ip: "1",
        bandwidth: "2 TB",
        price: "7000",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-advanced-vps",
      },
      {
        planName: "5G",
        speed: "16vCore",
        memory: "32 GB",
        diskSpace: "200 GB",
        ip: "1",
        bandwidth: "5 TB",
        price: "14000",
        url: "https://login.dinihost.com/index.php?rp=/store/bdix-vps/bdix-premium-vps",
      },
    ],
  },
];

function SsdVps() {
  return (
    <main>
      <section className="relative w-full h-full">
        <div
          style={{
            backgroundImage: `url('/ssd-vps-cover.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full lg:h-96 flex flex-col items-center justify-center text-white lg:absolute top-0 px-4 py-28 lg:py-0"
        >
          <h2 className="text-5xl font-semibold capitalize">SSD VPS</h2>
        </div>

        <div className="pt-0 lg:pt-72">
          <VpsSelector />
        </div>

        <VpsTable tableData={tableData} />
      </section>
    </main>
  );
}

export default SsdVps;
