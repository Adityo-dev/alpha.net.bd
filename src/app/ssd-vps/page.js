// components
import VpsSelector from "@/components/ssdVps/VpsSelector";
import VpsTable from "@/components/ssdVps/VpsTable";

const tableData = [
  {
    title: "BDIX KVM VPS",
    info: [
      {
        planName: "BDIX SSD 2G",
        speed: "2 x 2.5 GHz",
        memory: "2 GB Dedicated",
        diskSpace: "25 GB SSD",
        bandwidth: "1 TB",
        price: "2,500",
        url: "#",
      },
      {
        planName: "BDIX SSD 4G",
        speed: "4 x 2.5 GHz",
        memory: "4 GB Dedicated",
        diskSpace: "50 GB SSD",
        bandwidth: "2 TB",
        price: "5,000",
        url: "#",
      },
      {
        planName: "BDIX SSD 6G",
        speed: "4 x 2.5 GHz",
        memory: "6 GB Dedicated",
        diskSpace: "75 GB SSD",
        bandwidth: "3 TB",
        price: "7,500",
        url: "#",
      },
      {
        planName: "BDIX SSD 8G",
        speed: "6 x 2.5 GHz",
        memory: "8 GB Dedicated",
        diskSpace: "100 GB SSD",
        bandwidth: "4 TB",
        price: "10,000",
        url: "https://billing.xeonbd.com/cart.php?a=add&pid=1",
      },
      {
        planName: "BDIX SSD 16G",
        speed: "8 x 2.5 GHz",
        memory: "16 GB Dedicated",
        diskSpace: "150 GB SSD",
        bandwidth: "4 TB",
        price: "15,000",
        url: "#",
      },
      {
        planName: "BDIX SSD 32G",
        speed: "16 x 2.5 GHz",
        memory: "32 GB Dedicated",
        diskSpace: "300 GB SSD",
        bandwidth: "6 TB",
        price: "22,500",
        url: "",
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
