import Image from "next/image";

const hostServiceData = [
  {
    title: "Free migrations",
    description:
      "Moving to HostSeba is easy, well take care of the migration for you for FREE",
  },
  {
    title: "24/7 support",
    description:
      "Our team is always online 24/7 for you support and customer service.",
  },
  {
    title: "Free Daily backup",
    description:
      "We automatically create daily, weekly backups of your entire websites",
  },
  {
    title: "30 days guarantee",
    description:
      "Give our high-speed hosting service a try completely risk-free! money back guarantee.",
  },
];

function HostServiceFeatures() {
  return (
    <section className="container mx-auto px-3 lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 bg-white shadow-md p-8">
        {hostServiceData.map((service, ind) => (
          <div
            key={ind}
            className="border-b sm:border-b-0 sm:border-r last:border-none pb-6 sm:pr-6 sm:pb-0"
          >
            <div className="flex items-center gap-2">
              <Image
                src={"/check-mark.png"}
                width={400}
                height={400}
                alt="check mark image ..."
                className="w-5 h-5"
              />
              <h2 className="text-2xl font-semibold">{service?.title}</h2>
            </div>
            <h2 className="mt-3">{service?.description}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HostServiceFeatures;
