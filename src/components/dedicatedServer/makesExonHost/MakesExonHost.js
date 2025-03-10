import Image from "next/image";

function MakesExonHost({ makesExonHostData }) {
  return (
    <section className="w-full h-full bg-[#02345C] text-white py-16">
      <div className="container mx-auto px-3 lg:px-6">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-4">
          What is our specialty?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {makesExonHostData.map((data, ind) => (
            <div
              key={ind}
              className="flex items-center gap-6 bg-[#03416D] p-6 rounded-lg shadow-lg transition hover:shadow-xl"
            >
              {/* Image */}
              <Image
                src={data?.image}
                width={80}
                height={80}
                alt=""
                className="max-w-20 h-20 object-contain"
              />

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold mb-2">{data?.title}</h4>
                <p className="text-[#d8d8d9] text-sm leading-relaxed">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MakesExonHost;
