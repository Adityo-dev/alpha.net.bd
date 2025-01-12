import Image from "next/image";

function AvailableOperatingSystems({ availableOperatingSystemsData }) {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12">
      {/* Section Title */}
      <h3 className="text-3xl lg:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        Available Operating Systems
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {availableOperatingSystemsData.map((data, ind) => (
          <div
            key={ind}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg transition hover:shadow-xl"
          >
            {/* Operating System Logo */}
            <Image
              src={data?.image}
              width={80}
              height={80}
              alt={data?.name}
              className="w-16 h-16 object-contain"
            />
            {/* Operating System Name */}
            <p className="mt-4 text-[#1f2933] text-sm font-medium">
              {data?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailableOperatingSystems;
