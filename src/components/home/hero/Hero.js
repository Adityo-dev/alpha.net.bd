import HeroSlider from "./HeroSlider";
// data
const heroData = [
  {
    title:
      "Simple, Powerful <span class='text-[#FFB800]'>Email for Small </span> Businesses",
    description:
      "Give your business a professional makeover with email@yourbrand.com",
    image: "/emailslider.svg",
    url: "/contact-us",
  },
  {
    title:
      "Kick off<span class='text-[#FFB800]'>the new year with</span>the perfect domain",
    description:
      "START WITH THE PERFECT DOMAIN, With more than 300 domain extensions, you'll find the one that fits just right.",
    image: "/cloudslider.svg",
    url: "https://www.dinisoftbd.com/domain",
  },
  {
    title: "Cloud<span class='text-[#FFB800]'>Virtual Private</span> Servers",
    description:
      " Storage Optimized Virtual Private Servers use enterprise hard disk drives to increase the amount of storage space allocated per slice.",
    image: "/dedicatedserverslider.svg",
    url: "/ssd-vps",
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
