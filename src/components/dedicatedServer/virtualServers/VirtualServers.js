import Image from "next/image";

function VirtualServers({ virtualServersData }) {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12">
      {/* Section Title */}
      <h3 className="text-3xl lg:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        All Virtual Servers Included
      </h3>

      {/* Grid for Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {virtualServersData.map((data, ind) => (
          <div key={ind} className="text-center bg-white">
            {/* Image */}
            <Image
              src={data?.image}
              width={100}
              height={100}
              alt=""
              className="w-20 h-20 mx-auto object-contain"
            />

            {/* Content */}
            <div className="mt-6">
              <h4 className="text-[#0a4040] text-lg font-semibold mb-2">
                {data?.title}
              </h4>
              <p className="text-[#353e47] text-sm leading-relaxed">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VirtualServers;
