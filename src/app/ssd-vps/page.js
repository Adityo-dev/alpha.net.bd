// components
import VpsTable from "@/components/ssdVps/VpsTable";

const tableData = [
  {
    title: "OpenVZ VPS",
    info: [
      {
        planName: "OpenVZ SSD 2G",
        speed: "2 x 2.2 GHz",
        memory: "2 GB Dedicated",
        diskSpace: "40 GB SSD",
        bandwidth: "1 TB",
        price: "1,374",
      },
      {
        planName: "OpenVZ SSD 4G",
        speed: "4 x 2.2 GHz",
        memory: "4 GB Dedicated",
        diskSpace: "80 GB SSD",
        bandwidth: "2 TB",
        price: "2,649",
      },
      {
        planName: "OpenVZ SSD 6G",
        speed: "4 x 2.2 GHz",
        memory: "6 GB Dedicated",
        diskSpace: "100 GB SSD",
        bandwidth: "3 TB",
        price: "3,709",
      },
      {
        planName: "OpenVZ SSD 8G",
        speed: "6 x 2.2 GHz",
        memory: "8 GB Dedicated",
        diskSpace: "160 GB SSD",
        bandwidth: "4 TB",
        price: "4,769",
      },
    ],
  },
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
      },
      {
        planName: "BDIX SSD 4G",
        speed: "4 x 2.5 GHz",
        memory: "4 GB Dedicated",
        diskSpace: "50 GB SSD",
        bandwidth: "2 TB",
        price: "5,000",
      },
      {
        planName: "BDIX SSD 6G",
        speed: "4 x 2.5 GHz",
        memory: "6 GB Dedicated",
        diskSpace: "75 GB SSD",
        bandwidth: "3 TB",
        price: "7,500",
      },
      {
        planName: "BDIX SSD 8G",
        speed: "6 x 2.5 GHz",
        memory: "8 GB Dedicated",
        diskSpace: "100 GB SSD",
        bandwidth: "4 TB",
        price: "10,000",
      },
      {
        planName: "BDIX SSD 16G",
        speed: "8 x 2.5 GHz",
        memory: "16 GB Dedicated",
        diskSpace: "150 GB SSD",
        bandwidth: "4 TB",
        price: "15,000",
      },
      {
        planName: "BDIX SSD 32G",
        speed: "16 x 2.5 GHz",
        memory: "32 GB Dedicated",
        diskSpace: "300 GB SSD",
        bandwidth: "6 TB",
        price: "22,500",
      },
    ],
  },
];

function SsdVps() {
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
          <h2 className="text-5xl font-semibold capitalize mb-3">SSD VPS</h2>
        </div>

        <div className="space-y-16">
          <div className="pt-72">
            <VpsTable tableData={tableData} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SsdVps;
