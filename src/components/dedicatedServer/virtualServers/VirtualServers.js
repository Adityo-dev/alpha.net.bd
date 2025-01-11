import Image from "next/image";

function VirtualServers({ virtualServersData }) {
  return (
    <section className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold text-center mb-8 text-[#1f2933]">
        All Virtual Servers Included
      </h3>

      <div className="flex justify-between items-center gap-6">
        {virtualServersData.map((data, ind) => (
          <div key={ind}>
            <Image
              src={data?.image}
              width={400}
              height={400}
              alt=""
              className="max-w-36 h-full mx-auto object-contain"
            />

            <div className="mt-4 text-center">
              <h4 className="text-[#0a4040] text-lg font-semibold mb-1">
                {data?.title}
              </h4>
              <p className="text-[#353e47]">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VirtualServers;
