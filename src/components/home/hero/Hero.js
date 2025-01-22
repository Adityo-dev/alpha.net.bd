import HeroSlider from "./HeroSlider";
// data
const heroData = [
  {
    title:
      "Register <span class='text-[#FFB800]'>Domain Name</span> For Your Business",
    description:
      "Search your new domains and register your domain name before someone else does. Register top-level domain at low price. Your domain name will be registered instantly.",
    image: "/domainslider.svg",
    url: "",
  },
  {
    title:
      "Secure <span class='text-[#FFB800]'>Cloud Storage</span> For Your Important Data",
    description:
      "Store your valuable business data with our trusted, secure and reliable server. Share and store your files privately & securely using an advanced file sharing facility. You can get up to 50 GB to 90 TB of Cloud Storage for your business.",
    image: "/cloudslider.svg",
  },
  {
    title:
      "High Performance <span class='text-[#FFB800]'>Dedicated Server</span> For Your Business",
    description:
      "Get your dedicated servers that feature Intel Xeon E5-V4 dual Processor with up to 28 Physical Core and 56 Logical Core, 512 GB DDR4 ECC Registered RAM and 7.68 TB SAS Raid Storage.",
    image: "/dedicatedserverslider.svg",
  },
  {
    title:
      "Send Your <span class='text-[#FFB800]'>Business Email</span> with Your Business Name",
    description:
      "Run your business with a growth mindset. Get secure email hosting plans come with the best useful features & tools for better security, data safety, and expansion.",
    image: "/emailslider.svg",
  },
];

function Hero() {
  return (
    <div>
      <HeroSlider sliderData={heroData} />
    </div>
  );
}

export default Hero;
