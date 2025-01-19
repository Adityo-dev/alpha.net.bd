import Image from "next/image";

// data
const advancedFeaturesData = [
  {
    title: "<span class='font-semibold'>Softaculous</span> Script Installer	",
  },
  {
    title: "<span class='font-semibold'>Imunify360</span> Security Firewall",
  },
  {
    title: "Server Location <span class='font-semibold'>USA/UK</span>",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
  {
    title: "Softaculous Script Installer",
  },
];

function AdvancedFeatures() {
  return (
    <main className="container mx-auto px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        Advanced Features
      </h2>

      <section className="grid grid-cols-4">
        {advancedFeaturesData.map((feature, ind) => (
          <div
            key={ind}
            className="flex items-center gap-1 border border-[#8EC151] rounded-lg p-4"
          >
            <Image
              src={"/check-mark.png"}
              width={400}
              height={400}
              alt=""
              className="w-5 h-5"
            />
            <p dangerouslySetInnerHTML={{ __html: feature?.title }} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default AdvancedFeatures;
