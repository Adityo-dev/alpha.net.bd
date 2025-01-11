import { Cpu, MemoryStick, Rotate3d, Server } from "lucide-react";
import Image from "next/image";

function SingleProcessor({ singleProcessorData }) {
  return (
    <section className="relative container mx-auto px-6">
      <div className="bg-white shadow-lg rounded-lg pt-9">
        {/* Header Section */}
        <div className="px-9 space-y-2 pb-6 border-b">
          <h2 className="text-2xl font-semibold">Single Processor</h2>
          <p className="text-[#6b7781]">
            Sort a list of servers by clicking on the column header
          </p>
        </div>

        {/* Processors List */}
        {singleProcessorData.map((singleProcessor, ind) => (
          <div
            key={ind}
            className="grid grid-cols-12 items-center px-9 py-4 border-b gap-4"
          >
            {/* Image and Name */}
            <div className="flex items-center gap-4 col-span-4 lg:col-span-3">
              <Image
                src={singleProcessor?.image}
                width={400}
                height={400}
                alt="Processor Image"
                className="w-12 h-12"
              />
              <div>
                <p className="font-semibold">{singleProcessor?.name}</p>
                <p className="text-sm">
                  <span className="font-semibold">
                    {singleProcessor?.cores} Cores
                  </span>
                  <span> @ </span>
                  <span className="font-semibold">
                    {singleProcessor?.ghz} GHz
                  </span>
                </p>
              </div>
            </div>

            {/* Specs Section */}
            <div className="flex ic justify-between col-span-6">
              <div className="flex items-center gap-2">
                <MemoryStick size={24} color="#727d88" strokeWidth={1.2} />
                <div>
                  <p className="text-sm text-[#727d88]">Memory</p>
                  <p>{singleProcessor?.memory}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={24} color="#727d88" strokeWidth={1.2} />
                <div>
                  <p className="text-sm text-[#727d88]">Speed</p>
                  <p>{singleProcessor?.speed}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Server size={24} color="#727d88" strokeWidth={1.2} />
                <div>
                  <p className="text-sm text-[#727d88]">Storage</p>
                  <p>{singleProcessor?.storage}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Rotate3d size={24} color="#727d88" strokeWidth={1.2} />
                <div>
                  <p className="text-sm text-[#727d88]">Transfer</p>
                  <p>{singleProcessor?.transfer}</p>
                </div>
              </div>
            </div>

            {/* Price and Configure Button */}
            <div className="flex justify-end items-center gap-6 col-span-3">
              <p className="text-[#1e2e2f] text-2xl font-semibold">
                Tk {singleProcessor?.tk}
              </p>
              <button className="bg-[#1e2e2f] transition-all duration-300 hover:bg-[#40BC3D] text-white px-6 py-3 rounded-md uppercase">
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SingleProcessor;
