import Image from "next/image";

function AvailableOperatingSystems({ availableOperatingSystemsData }) {
  return (
    <section className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold text-center mb-8">
        Available Operating Systems
      </h3>

      <div className="grid grid-cols-5 gap-x-12 gap-y-6">
        {availableOperatingSystemsData.map((data, ind) => (
          <div
            key={ind}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg"
          >
            <Image
              src={data?.image}
              width={400}
              height={400}
              alt="00"
              className="max-w-14 h-14 object-contain"
            />
            <p className="mt-4">{data?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailableOperatingSystems;
