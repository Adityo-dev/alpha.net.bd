import { Cpu, MemoryStick, Rotate3d, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Processor({ processorData }) {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="relative container mx-auto px-3 lg:px-6 py-16 space-y-3">
        {processorData.map((processor, ind) => (
          <div key={ind} className="bg-white shadow-md rounded-lg">
            {/* Header Section */}
            <div className="p-6 lg:p-9 lg:border-b text-center lg:text-start">
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#1e293b]">
                {processor?.title}
              </h2>
              <p className="text-[#6b7781] text-sm lg:text-base">
                {processor?.description}
              </p>
            </div>

            {/* Processors List */}
            {processor?.info.map((singleProcessor, ind) => (
              <div
                key={ind}
                className="grid grid-cols-1 lg:grid-cols-12 items-center px-6 lg:px-9 py-6 border-b gap-y-6 lg:gap-4"
              >
                {/* Image and Name */}
                <div className="flex flex-col  lg:flex-row items-center text-center lg:text-start justify-center lg:justify-start gap-4  col-span-12 xl:col-span-3 border-b  lg:border-b-0 pb-5 lg:pb-0">
                  <Image
                    src={singleProcessor?.image}
                    width={400}
                    height={400}
                    alt="Processor Image"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-semibold text-[#1e293b]">
                      {singleProcessor?.name}
                    </p>
                    {/* <p className="text-sm text-[#6b7781]">
                      <span className="font-semibold text-[#1e293b]">
                        {singleProcessor?.cores} Cores
                      </span>
                      <span> @ </span>
                      <span className="font-semibold text-[#1e293b]">
                        {singleProcessor?.ghz} GHz
                      </span>
                    </p> */}
                  </div>
                </div>

                {/* Specs Section */}
                <div className="flex flex-wrap justify-between col-span-12 lg:col-span-8 xl:col-span-6 gap-4">
                  <div className="flex items-center gap-3">
                    <MemoryStick size={28} color="#6b7781" strokeWidth={1.2} />
                    <div>
                      <p className="text-sm text-[#6b7781]">RAM</p>
                      <p className="font-medium text-[#1e293b]">
                        {singleProcessor?.ram}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu size={28} color="#6b7781" strokeWidth={1.2} />
                    <div>
                      <p className="text-sm text-[#6b7781]">STORAGE</p>
                      <p className="font-medium text-[#1e293b]">
                        {singleProcessor?.storage}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server size={28} color="#6b7781" strokeWidth={1.2} />
                    <div>
                      <p className="text-sm text-[#6b7781]">BANDWIDTH</p>
                      <p className="font-medium text-[#1e293b]">
                        {singleProcessor?.bandwidth}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rotate3d size={28} color="#6b7781" strokeWidth={1.2} />
                    <div>
                      <p className="text-sm text-[#6b7781]">LOCATION</p>
                      <p className="font-medium text-[#1e293b]">
                        {singleProcessor?.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price and Configure Button */}
                <div className="flex flex-col lg:flex-row justify-end items-center col-span-12 lg:col-span-4 xl:col-span-3 gap-4">
                  <p className="text-[#1e293b] text-2xl font-semibold">
                    Tk {singleProcessor?.tk}
                  </p>
                  <Link href={"https://login.dinihost.com/index.php?rp=/store/dedicated-server"} className="bg-[#1e293b] text-white px-6 py-3 rounded-md uppercase transition duration-300 hover:bg-[#40bc3d]">
                    Configure
                  </Link>
                </div>
                
              </div>
            ))}
            
           
          </div>
          
        ))}
         <p className="text-center bg-[#1e293b] text-white px-6 py-3">For managed Dedicated servers 3000/- Will be added with cPanel, CloudLinux, LiteSpeed, and Softaculous (Shared License).</p>
      </div>
      
    </section>
  );
}

export default Processor;
