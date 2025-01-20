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
    title: "<span class='font-semibold'>LiteSpeed</span> Web Server",
  },
  {
    title: "<span class='font-semibold'>PHP</span> Selector (5.4 – 8.x)",
  },
  {
    title: "<span class='font-semibold'>Python</span> Version Selector",
  },
  {
    title: "<span class='font-semibold'>Ruby</span> On Rails",
  },
  {
    title: "<span class='font-semibold'>Node.js</span> Version Selector",
  },
  {
    title: "<span class='font-semibold'>Imunify360</span> Security Firewall",
  },
  {
    title: "Server Location <span class='font-semibold'>USA/UK</span>",
  },
  {
    title: "Server Location <span class='font-semibold'>USA/UK</span>",
  },
  {
    title: "Server Location <span class='font-semibold'>USA/UK</span>",
  },
  {
    title: "<span class='font-semibold'>LiteSpeed</span> Web Server",
  },
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
    title: "<span class='font-semibold'>LiteSpeed</span> Web Server",
  },
  {
    title: "<span class='font-semibold'>PHP</span> Selector (5.4 – 8.x)",
  },
  {
    title: "<span class='font-semibold'>Python</span> Version Selector",
  },
  {
    title: "<span class='font-semibold'>Ruby</span> On Rails",
  },
  {
    title: "<span class='font-semibold'>Node.js</span> Version Selector",
  },
  {
    title: "<span class='font-semibold'>Imunify360</span> Security Firewall",
  },
  {
    title: "Server Location <span class='font-semibold'>USA/UK</span>",
  },
  {
    title: "<span class='font-semibold'>LiteSpeed</span> Web Server",
  },
 
];

function AdvancedFeatures() {
  return (
    <main className="container mx-auto px-3 lg:px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#1f2933]">
        Advanced Features
      </h2>

      <section className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
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
